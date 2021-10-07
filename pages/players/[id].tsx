import Head from "next/head";
import { Player } from "@src/util/types";
import currencyFormatter from "@src/util/currencyFormatter";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";
import { formatDate } from "@src/util/dateFormatter";

type Props = {
    player: Player | null;
};

const PlayerDetail: React.FC<Props> = ({ player }: Props) => {
    if (!player) {
        return (
            <_404 message="Player not found." />
        );
    }

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
                        <li>{formatDate(dateOfBirth)}</li>
                        <li>{age}</li>
                        <li>{team ? team.name : "Free Agent"}</li>
                        {player.contract ? (
                            <li>{currencyFormatter.format(salaryPerYearDollar)} / {yearsLeft} years</li>
                        ) : ""}
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
    const player = playerResponse.status === HttpStatus.OK
        ? await playerResponse.json()
        : null
    ;

    return {
        props: {
            player,
        },
    };
};

export default PlayerDetail;
