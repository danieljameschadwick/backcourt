import Head from "next/head";
import { Game } from "@src/util/type/Game";

type Props = {
    games: Game[];
};

const Games = ({ games }: Props) => {
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
                                <a href={`/games/${id}`}>{awayTeam.name} @ {homeTeam.name}, 17/12/2021</a>
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

export default Games;