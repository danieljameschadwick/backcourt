import Head from "next/head";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";
import { Game } from "@src/util/type/Game";
import { formatDateFriendly, formatTimeFriendly } from "@src/util/dateFormatter";
import { useStateValue } from "@src/state/StateProvider";
import { Team } from "@src/util/type/Team";
import dynamic from "next/dynamic";
import GameHeader from "@src/components/game/GameHeader";
import GameStrategy from "@src/components/game/edit/GameStrategy";
import ScoutingReport from "@src/components/game/edit/ScoutingReport";
import Matchup from "@src/components/game/edit/Matchup";
import GameControls from "@src/components/game/GameControls";
import InjuryReport from "@src/components/game/InjuryReport";

type Props = {
    game: Game | null;
};

const GameEdit: React.FC<Props> = ({ game }: Props) => {
    const [ state, dispatch ] = useStateValue();
    const { user } = state || {};
    const { username = null, team: userTeam = null } = user || {};

    if (!game) {
        return (
            <_404 message="Game not found." />
        );
    }

    // @TODO: permissions, can edit? who are we editing?
    const {
        homeTeam: {
            team: homeTeam,
            matchup: homeMatchup,
            strategy: homeStrategy,
        },
        awayTeam: {
            team: awayTeam,
            matchup: awayMatchup,
            strategy: awayStrategy,
        },
        scheduledDateTime
    } = game;

    const getTeam = (userTeam: Team, homeTeam: Team, awayTeam: Team) => {
        if (userTeam.id === homeTeam.id) {
            return {
                team: homeTeam,
                isHome: true,
            };
        }

        if (userTeam.id === awayTeam.id) {
            return {
                team: awayTeam,
                isHome: false,
            };
        }

        return null;
    }

    if (userTeam === null) {
        return (
            <>User Team is null</>
        );
    }

    const { team = null, isHome = null } = getTeam(userTeam, homeTeam, awayTeam);

    if (team === null) {
        return (
            <>User Team is null</>
        );
    }

    return (
        <div>
            <Head>
                <title>Backcourt | {homeTeam.abbreviation} @ {awayTeam.abbreviation}{scheduledDateTime ? ` | ${formatDateFriendly(scheduledDateTime)} ${formatTimeFriendly(scheduledDateTime)} GMT` : ``} | Edit</title>
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
                        <GameStrategy
                            game={game}
                            strategy={(isHome) ? homeStrategy : awayStrategy}
                            isHome={isHome}
                        />

                        <Matchup
                            game={game}
                            matchup={(isHome) ? homeMatchup : awayMatchup}
                            isHome={isHome}
                        />
                    </div>

                    <div className={"sidebar-container"}>
                        <div className={"column-container"}>
                            <ScoutingReport />

                            <InjuryReport />
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

export default dynamic(async () => await GameEdit, {
    ssr: false
});
