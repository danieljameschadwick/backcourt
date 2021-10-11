import Head from "next/head";
import { Game } from "@src/util/type/Game";
import { formatDate } from "@src/util/dateFormatter";

type Props = {
    games: Game[];
};

const Index = ({ games }: Props) => {
    return (
        <div>
            <Head>
                <title>Backcourt | Games</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className={"container"}>
                    <h1>Games</h1>

                    {games ? games.map(game => {
                        const { id, homeTeam, awayTeam } = game;

                        return (
                            <div key={id}>
                                <a href={`/games/${id}`}>
                                    {awayTeam.name} @ {homeTeam.name}, {formatDate(game.scheduledDateTime)}
                                </a>
                            </div>
                        );
                    }) : "No games found."}
                </div>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const gamesResponse = await fetch(`${process.env.API}/game`);
    const games: Game[] = await gamesResponse.json();

    return {
        props: {
            games,
        },
    };
};

export default Index;
