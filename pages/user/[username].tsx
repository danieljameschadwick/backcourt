import Head from "next/head";
import { User } from "@src/state/User";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";

type Props = {
    user: User | null;
};

const UserView: React.FC<Props> = ({ user }: Props) => {
    if (!user) {
        return (
            <_404 message="User not found." />
        );
    }

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
    const user = userResponse.status === HttpStatus.OK
        ? await userResponse.json()
        : null
    ;

    return {
        props: {
            user,
        },
    };
};

export default UserView;