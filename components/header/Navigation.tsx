const Navigation: React.FC = () => {
    return (
        <div className={"header--navigation"}>
            <div className={"brand"}>
                <a href={"/"}>
                    backcourt
                </a>
            </div>

            <div className={"links"}>
                <a href={"/teams"}>
                    Teams
                </a>

                <a href={"/players"}>
                    Players
                </a>

                <a href={"/games"}>
                    Games
                </a>
            </div>
        </div>
    );
};

export default Navigation;
