import Head from "next/head";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";
import { Game } from "@src/util/type/Game";
import { formatDateFriendly, formatTimeFriendly } from "@src/util/dateFormatter";
import InjuryReport from "@src/components/game/InjuryReport";
import Roster from "@src/components/game/Roster";
import dynamic from "next/dynamic";
import Standings from "@src/components/game/Standings";
import GameHeader from "@src/components/game/GameHeader";

const GameControls = dynamic(
    () => import("@src/components/game/GameControls"),
    { ssr: false }
);

type Props = {
    game: Game | null;
};

const GameDetail: React.FC<Props> = ({ game }: Props) => {
    if (!game) {
        return (
            <_404 message="Game not found." />
        );
    }

    const {
        homeTeam: {
            team: {
                abbreviation: homeAbbreviation,
                division: homeDivision = null,
            },
        },
        awayTeam: {
            team: {
                abbreviation: awayAbbreviation,
                division: awayDivision = null,
            },
        },
        scheduledDateTime
    } = game;

    const sameDivision = (homeDivision && awayDivision) && (homeDivision.id === awayDivision.id);

    return (
        <div>
            <Head>
                <title>Backcourt
                    | {homeAbbreviation} @ {awayAbbreviation} {scheduledDateTime ? `| ${formatDateFriendly(scheduledDateTime)} ${formatTimeFriendly(scheduledDateTime)} GMT` : ``}</title>
                <meta name={"description"} content={`Game Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <GameHeader game={game} />

                <div className={"container"}>
                    <GameControls game={game} isEditing={false} />
                </div>

                <div className={"container game-container layout-container"}>
                    <div className={"content-container"}>
                        <div className={"split-container"}>
                            <Roster gameTeam={game.awayTeam} />
                            <Roster gameTeam={game.homeTeam} />
                        </div>

                        <InjuryReport />
                    </div>

                    <div className={"sidebar-container"}>
                        <div className={"column-container"}>
                            {(homeDivision && awayDivision) ?
                                sameDivision ? (
                                    <Standings divisionId={homeDivision.id} />
                                ) : (
                                    <>
                                        <Standings divisionId={awayDivision.id} />

                                        <Standings divisionId={homeDivision.id} />
                                    </>
                                )
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params }) => {
    const gameResponse = await fetch(`${process.env.API}/game/${params.id}/data`);
    const game = gameResponse.status === HttpStatus.OK
        ? await gameResponse.json()
        : null
    ;

    return {
        props: {
            game,
        },
    };
};

export default GameDetail;
