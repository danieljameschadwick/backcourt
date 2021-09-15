import { useStateValue } from "@src/state/StateProvider";

const Header: React.FC = () => {
    const [ { user }, dispatch ] = useStateValue();

    const logout = () => {
        dispatch({ type: "setUsername", username: null });
        dispatch({ type: "setAccessToken", accessToken: null });

        // window.location.reload();
    };

    return (
        <div className={"header--userbar"}>
            <div className={"user-links"}>
                {user.username ?
                    (
                        <span>
                            {user.username}
                        </span>
                    ) : (
                        <a href={"/login"}>
                            Log in
                        </a>
                    )
                }

                <span className={"splitter"}>|</span>

                {user.username ?
                    (
                        <span onClick={() => logout()}>
                            Logout
                        </span>
                    ) : (
                        <a href={"#"}>
                            Register
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default Header;
