import Head from "next/head";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";
import { Game } from "@src/util/type/Game";
import HeaderTeamCard from "@src/components/game/HeaderTeamCard";
import { formatDateFriendly, formatTimeFriendly } from "@src/util/dateFormatter";

type Props = {
    game: Game | null;
};

const GameDetail: React.FC<Props> = ({ game }: Props) => {
    if (!game) {
        return (
            <_404 message="Game not found." />
        );
    }

    const { homeTeam: { name: homeName, abbreviation: homeAbbreviation }, awayTeam: { name: awayName, abbreviation: awayAbbreviation }, scheduledDateTime } = game;

    return (
        <div>
            <Head>
                <title>Backcourt | {homeAbbreviation} @ {awayAbbreviation} scheduledDateTime ? {`| ${formatDateFriendly(scheduledDateTime)} ${formatTimeFriendly(scheduledDateTime)}`} : ``</title>
                <meta name={"description"} content={`Game Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <div className={"game--header"}>
                    <HeaderTeamCard team={game.awayTeam} homeTeam={false} />

                    <div className={"game-status"}>
                        {scheduledDateTime ? (
                            <>
                                <span className={"game-status--date"}>
                                    {formatDateFriendly(scheduledDateTime)}
                                </span>

                                <span className={"game-status--time"}>
                                    {formatTimeFriendly(scheduledDateTime)} GMT

                                </span>
                            </>
                        ): ''}
                    </div>

                    <HeaderTeamCard team={game.homeTeam} />
                </div>

                <div className={"container"}>
                    <h1>{awayName} @ {homeName}</h1>
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
}

export default GameDetail;
