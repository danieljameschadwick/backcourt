import Head from "next/head";
import { User } from "@src/state/User";

type Props = {
    user: User;
};

const UserView: React.FC<Props> = ({ user }: Props) => {
    const {
        username,
        team = null
    } = user;

    return (
        <div>
            <Head>
                <title>Backcourt | {user.username}</title>
                <meta name={"description"} content={`${username}'s Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <div className={"container"}>
                    <h1>{username}</h1>

                    {team ? (
                        <p>Team: {team.name}</p>
                    ) : ''}
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
    const userResponse = await fetch(`${process.env.API}/user/${params.username}`);
    const user = await userResponse.json();

    return {
        props: {
            user,
        },
    };
};

export default UserView;