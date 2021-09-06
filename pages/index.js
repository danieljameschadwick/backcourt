import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Index({ players, teams }) {

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
    });


    const handleSubmit = async (playerDTO) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(playerDTO),
        };

        const response = await fetch(`${process.env.API}/player`, requestOptions);
        const player = await response.json();

        console.log(player);
    };

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

                    {players ? players.map(player => {
                        return (
                            <div key={player.id}>
                                <div>{player.firstName} {player.lastName}</div>

                                {player.team
                                    ? <div>{player.team.name}</div>
                                    : ""
                                }

                                <br />
                            </div>
                        );
                    }) : "No players found."}

                    <h3>Create a Player</h3>

                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            dateOfBirth: "",
                        }}
                        validationSchema={PlayerSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handleSubmit(values);

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
                                <input
                                    type={"text"}
                                    name={"firstName"}
                                    onChange={handleChange}
                                    value={values.firstName}
                                />

                                {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}

                                <input
                                    type={"text"}
                                    name={"lastName"}
                                    onChange={handleChange}
                                    value={values.lastName}
                                />

                                <input
                                    type={"date"}
                                    name={"dateOfBirth"}
                                    onChange={handleChange}
                                    value={values.dateOfBirth}
                                />

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
                                {team.name}, {team.abbreviation}
                            </div>
                        );
                    }) : "No teams found."}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps(context) {
    const playersResponse = await fetch(`${process.env.API}/player`);
    const players = await playersResponse.json();

    const teamsResponse = await fetch(`${process.env.API}/team`);
    const teams = await teamsResponse.json();

    return {
        props: {
            players,
            teams,
        },
    };
}
