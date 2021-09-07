import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import { Player, Team } from "@src/util/types";
import { CreatePlayerDTO, CreateTeamDTO } from "@src/util/dto";

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