import Head from "next/head";
import { Player } from "@src/util/types";
import currencyFormatter from "@src/util/currencyFormatter";

type Props = {
    player: Player;
};

const PlayerDetail: React.FC<Props> = ({ player }: Props) => {
    const {
        firstName,
        lastName,
        team,
        dateOfBirth,
        age,
        contract: { salaryPerYearDollar, yearsLeft } = {}
    } = player;

    return (
        <div>
            <Head>
                <title>Backcourt | {firstName} {lastName}, {team ? team.name : "Free Agent"}</title>
                <meta name={"description"} content={`${firstName} ${lastName}'s Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <div className={"container"}>
                    <h1>{firstName} {lastName}</h1>

                    <ul>
                        <li>{dateOfBirth}</li>
                        <li>{age}</li>
                        <li>{team ? team.name : "Free Agent"}</li>
                        {player.contract
                            ? <li>{currencyFormatter.format(salaryPerYearDollar)} / {yearsLeft} years</li>
                            : ""}
                    </ul>
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
    const playerResponse = await fetch(`${process.env.API}/player/${params.id}`);
    const player = await playerResponse.json();

    return {
        props: {
            player,
        },
    };
};

export default PlayerDetail;