import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import { Player, Team } from "../util/types";
import { CreatePlayerDTO, CreateTeamDTO } from "../util/dto";

const PlayerSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    dateOfBirth: Yup.date()
        .required("Required"),
    team: Yup.string()
        .optional(),
});

const TeamSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    abbreviation: Yup.string()
        .min(3, "Too Short!")
        .max(3, "Too Long!")
        .required("Required"),
});

const handlePost = async (endpoint: string, dto: CreatePlayerDTO | CreateTeamDTO) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
    };

    const response = await fetch(`${process.env.API}/${endpoint}`, requestOptions);

    if (response.status !== 200) {
        return;
    }

    window.location.reload();
};

type Props = {
    players: Player[];
    teams: Team[];
};

const Index = ({ players, teams }: Props) => {
    return (
        <div>
            <Head>
                <title>Backcourt</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Backcourt</h1>

                <div>
                    <h2>Players</h2>

                    <ul>
                        {players ? players.map(player => {
                            return (
                                <li key={player.id}>
                                    {player.firstName} {player.lastName}, {player.team ? player.team.name : "Free Agent"}
                                </li>
                            );
                        }) : "No players found."}
                    </ul>

                    <h3>Create a Player</h3>

                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            dateOfBirth: "",
                            team: "",
                        }}
                        validationSchema={PlayerSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handlePost("player", values);
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
                                    <label>First Name:</label>

                                    <input
                                        type={"text"}
                                        name={"firstName"}
                                        onChange={handleChange}
                                        value={values.firstName}
                                    />

                                    {errors.firstName && touched.firstName ? (
                                        <div>{errors.firstName}</div>
                                    ) : null}
                                </div>


                                <div>
                                    <label>Last Name:</label>

                                    <input
                                        type={"text"}
                                        name={"lastName"}
                                        onChange={handleChange}
                                        value={values.lastName}
                                    />

                                    {errors.lastName && touched.lastName ? (
                                        <div>{errors.lastName}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>DoB:</label>

                                    <input
                                        type={"date"}
                                        name={"dateOfBirth"}
                                        onChange={handleChange}
                                        value={values.dateOfBirth}
                                    />

                                    {errors.dateOfBirth && touched.dateOfBirth ? (
                                        <div>{errors.dateOfBirth}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Team:</label>

                                    <select
                                        name={"team"}
                                        value={values.team}
                                        onChange={handleChange}
                                    >
                                        <option key={null} value={null} label={"Free Agent"} />
                                        {teams
                                            ? teams.map(team => {
                                                return (
                                                    <option
                                                        key={team.id}
                                                        value={team.id}
                                                        label={team.name}
                                                    />
                                                );
                                            })
                                            : <option value={null} label={"No teams found."} />
                                        }
                                    </select>

                                    {errors.team && touched.team ? (
                                        <div>{errors.team}</div>
                                    ) : null}
                                </div>

                                <button type="submit" disabled={isSubmitting}>
                                    Save
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>

                <div>
                    <h2>Teams</h2>

                    {teams ? teams.map(team => {
                        return (
                            <div key={team.id}>
                                <a href={`/team/${team.id}`}>{team.name}</a>, {team.abbreviation}
                            </div>
                        );
                    }) : "No teams found."}

                    <h3>Create a Team</h3>

                    <Formik
                        initialValues={{
                            name: "",
                            abbreviation: "",
                        }}
                        validationSchema={TeamSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handlePost("team", values);
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
                                    <label>Name:</label>

                                    <input
                                        type={"text"}
                                        name={"name"}
                                        onChange={handleChange}
                                        value={values.name}
                                    />

                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Abbreviation:</label>

                                    <input
                                        type={"text"}
                                        name={"abbreviation"}
                                        onChange={handleChange}
                                        value={values.abbreviation}
                                    />
                                    {errors.abbreviation && touched.abbreviation ? (
                                        <div>{errors.abbreviation}</div>
                                    ) : null}
                                </div>

                                <button type="submit" disabled={isSubmitting}>
                                    Save
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const playersResponse = await fetch(`${process.env.API}/player`);
    const players: Player[] = await playersResponse.json();

    const teamsResponse = await fetch(`${process.env.API}/team`);
    const teams: Team[] = await teamsResponse.json();

    return {
        props: {
            players,
            teams,
        },
    };
};

export default Index;