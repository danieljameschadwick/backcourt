import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import { Team, Player } from "@src/util/types";
import TeamPlayerCard from "@src/components/team/TeamPlayerCard";

const PlayerSchema = Yup.object().shape({
    player: Yup.string()
        .required("Required"),
});

const releasePlayer = async (teamId: string, playerId: string): Promise<void> => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };

    await fetch(`${process.env.API}/team/${teamId}/release/${playerId}`, requestOptions);
    window.location.reload();
};

const handleResign = async (teamId: string, playerId: string): Promise<void> => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };

    await fetch(`${process.env.API}/team/${teamId}/sign/${playerId}`, requestOptions);
    window.location.reload();
};

type Props = {
    team: Team;
    freeAgents: Player[];
};

const TeamDetail: React.FC<Props> = ({ team, freeAgents }: Props) => {
    const { name, players } = team;

    return (
        <div>
            <Head>
                <title>Backcourt | {name}</title>
                <meta name={"description"} content={`${name}'s Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <div className={"container"}>
                    <h1>{name}</h1>

                    <div className={"team-player--card-container"}>
                        {players ? players.map(player => {
                            return (
                                <TeamPlayerCard key={player.id} player={player} />
                            );
                        }) : ""}
                    </div>

                    <h2>Sign</h2>

                    <Formik
                        initialValues={{
                            player: "",
                        }}
                        validationSchema={PlayerSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handleResign(team.id, values.player);
                            setSubmitting(false);
                        }}
                    >
                        {({
                              values,
                              handleChange,
                              handleSubmit,
                              isSubmitting,
                              errors,
                              touched,
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <select
                                        name={"player"}
                                        value={values.player}
                                        onChange={handleChange}
                                    >
                                        <option key={null} value={null} label={"Select a Free Agent"} />
                                        {freeAgents
                                            ? freeAgents.map(player => {
                                                return (
                                                    <option
                                                        key={player.id}
                                                        value={player.id}
                                                        label={`${player.firstName} ${player.lastName}`}
                                                    />
                                                );
                                            })
                                            : <option value={null} label={"No free agents found."} />
                                        }
                                    </select>

                                    <button type="submit" disabled={isSubmitting}>
                                        Sign
                                    </button>
                                </div>

                                {errors.player && touched.player ? (
                                    <div>{errors.player}</div>
                                ) : null}
                            </form>
                        )}
                    </Formik>
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
    const teamResponse = await fetch(`${process.env.API}/team/${params.id}`);
    const team = await teamResponse.json();

    const freeAgentsResponse = await fetch(`${process.env.API}/player/free-agents`);
    const freeAgents = await freeAgentsResponse.json();

    return {
        props: {
            team,
            freeAgents
        },
    };
}

export default TeamDetail;