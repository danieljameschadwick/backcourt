import Head from "next/head";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";
import { Game } from "@src/util/type/Game";
import { formatDateFriendly, formatTimeFriendly } from "@src/util/dateFormatter";
import dynamic from "next/dynamic";
import GameHeader from "@src/components/game/GameHeader";
import GameStrategy from "@src/components/game/Edit/GameStrategy";
import ScoutingReport from "@src/components/game/Edit/ScoutingReport";

const GameControls = dynamic(
    () => import('@src/components/game/GameControls'),
    { ssr: false }
);

type Props = {
    game: Game | null;
};

const GameEdit: React.FC<Props> = ({ game }: Props) => {
    if (!game) {
        return (
            <_404 message="Game not found." />
        );
    }

    // @TODO: permissions, can edit? who are we editing?

    const {
        homeTeam: {
            abbreviation: homeAbbreviation,
            division: homeDivision = null
        },
        awayTeam: {
            abbreviation: awayAbbreviation,
            division: awayDivision = null
        },
        homeMatchup,
        awayMatchup,
        scheduledDateTime
    } = game;

    return (
        <div>
            <Head>
                <title>Backcourt | {homeAbbreviation} @ {awayAbbreviation}{scheduledDateTime ? ` | ${formatDateFriendly(scheduledDateTime)} ${formatTimeFriendly(scheduledDateTime)} GMT` : ``} | Edit</title>
                <meta name={"description"} content={`Game Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <GameHeader game={game} />

                <div className={"container"}>
                    <GameControls game={game} isEditing={true} />
                </div>

                <div className={"container layout-container"}>
                    <div className={"content-container"}>
                        <GameStrategy />
                    </div>

                    <div className={"sidebar-container"}>
                         <ScoutingReport />
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

export default GameEdit;
