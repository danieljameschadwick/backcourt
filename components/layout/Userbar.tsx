const Header: React.FC = () => {
    return (
        <div className={"header--userbar"}>
            <div className={"user-links"}>
                <a href={"/login"}>Log in</a>

                <span className={"splitter"}>|</span>

                <a href={"#"}>Register</a>
            </div>
        </div>
    );
};

export default Header;
