import { useStateValue } from "@src/state/StateProvider";

const Header: React.FC = () => {
    const [ { user }, dispatch ] = useStateValue();

    const logout = () => {
        dispatch({ type: "setUsername", username: null });
        dispatch({ type: "setAccessToken", accessToken: null });

        window.location.reload();
    };

    return (
        <div className={"header--userbar"}>
            <div className={"user-links"}>
                {user.username ? (
                    <a href={`/user/${user.username}`}>
                        {user.username}
                    </a>
                ) : (
                    <a href={"/login"}>
                        Log in
                    </a>
                )}

                <span className={"splitter"}>|</span>

                {user.username ? (
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
