import { useStateValue } from "@src/state/StateProvider";

const Header: React.FC = () => {
    const [ state, dispatch ] = useStateValue();
    const { user } = state || {};
    const { username = null, team = null } = user || {};

    const logout = () => {
        dispatch({ type: "setUsername", username: null });
        dispatch({ type: "setTeam", team: null });
        dispatch({ type: "setAccessToken", accessToken: null });

        window.location.reload();
    };

    return (
        <div className={"header--userbar"}>
            <div className={"user-links"}>
                {username ? (
                    <a href={`/user/${username}`}>
                        {username}
                    </a>
                ) : (
                    <a href={"/login"}>
                        Log in
                    </a>
                )}

                {team ? (
                    <>
                        <span className={"splitter"}>|</span>

                        <span className={"label"}>
                            Team: <a href={`/teams/${team.id}`}>
                                {team.name}
                            </a>
                        </span>
                    </>
                ) : ''}

                <span className={"splitter"}>|</span>

                {username ? (
                    <a href={"#"} onClick={() => logout()}>
                        Logout
                    </a>
                ) : (
                    <a href={"#"}>
                        Register
                    </a>
                )}
            </div>
        </div>
    );
};

export default Header;
