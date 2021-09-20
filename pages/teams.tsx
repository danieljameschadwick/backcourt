import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import { Team } from "@src/util/types";
import { CreatePlayerDTO, CreateTeamDTO } from "@src/util/dto";

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
    teams: Team[];
};

const Players = ({ teams }: Props) => {
    return (
        <div>
            <Head>
                <title>Backcourt | Players</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className={"container"}>
                    <h1>Teams</h1>

                    {teams ? teams.map(team => {
                        return (
                            <div key={team.id}>
                                <a href={`/teams/${team.id}`}>{team.name}</a>, {team.abbreviation}
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
    const teamsResponse = await fetch(`${process.env.API}/team`);
    const teams: Team[] = await teamsResponse.json();

    return {
        props: {
            teams,
        },
    };
};

export default Players;