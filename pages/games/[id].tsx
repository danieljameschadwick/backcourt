import Head from "next/head";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";
import { Game } from "@src/util/type/Game";
import HeaderTeamCard from "@src/components/game/HeaderTeamCard";
import { formatDateFriendly, formatDateShort, formatTimeFriendly } from "@src/util/dateFormatter";
import InjuryReport from "@src/components/game/InjuryReport";
import Roster from "@src/components/game/Roster";
import dynamic from "next/dynamic";
import Standings from "@src/components/game/Standings";

const GameControls = dynamic(
    () => import('@src/components/game/GameControls'),
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
        homeTeam: { abbreviation: homeAbbreviation },
        awayTeam: { abbreviation: awayAbbreviation },
        homeMatchup,
        awayMatchup,
        scheduledDateTime
    } = game;

    return (
        <div>
            <Head>
                <title>Backcourt | {homeAbbreviation} @ {awayAbbreviation} {scheduledDateTime ? `| ${formatDateFriendly(scheduledDateTime)} ${formatTimeFriendly(scheduledDateTime)} GMT` : ``}</title>
                <meta name={"description"} content={`Game Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <div className={"game--header-wrapper"}>
                    <div className={"game--header"}>
                        <HeaderTeamCard team={game.awayTeam} homeTeam={false} />

                        <div className={"game-status"}>
                            {scheduledDateTime ? (
                                <>
                                    <span className={"game-status--date"}>
                                        {formatDateFriendly(scheduledDateTime)}
                                    </span>

                                    <span className={"game-status--short-date"}>
                                        {formatDateShort(scheduledDateTime)}
                                    </span>

                                    <span className={"game-status--time"}>
                                        {formatTimeFriendly(scheduledDateTime)} GMT
                                    </span>
                                </>
                            ) : ""}
                        </div>

                        <HeaderTeamCard team={game.homeTeam} />
                    </div>

                    <div className={`post-header hidden`}>
                        {scheduledDateTime ? (
                            <>
                                <span className={"game-status--date"}>
                                    {formatDateFriendly(scheduledDateTime)}, {formatTimeFriendly(scheduledDateTime)} GMT
                                </span>
                            </>
                        ) : ""}
                    </div>
                </div>

                <div className={"container"}>
                    <GameControls game={game} />
                </div>

                <div className={"container layout-container"}>
                    <div className={"content-container"}>
                        <div className={"split-container "}>
                            <Roster team={game.awayTeam} matchup={awayMatchup} />
                            <Roster team={game.homeTeam} matchup={homeMatchup} />
                        </div>

                        <InjuryReport />
                    </div>

                    <div className={"sidebar-container"}>
                        <Standings />

                        <Standings />
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
