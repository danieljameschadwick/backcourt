import Navigation from "@src/components/header/Navigation";
import dynamic from "next/dynamic";

const Userbar = dynamic(
    () => import('@src/components/header/Userbar'),
    { ssr: false }
);

const GlobalScoreboard = dynamic(
    () => import('@src/components/header/GlobalScoreboard'),
    { ssr: false }
);

const Header: React.FC = () => {
    return (
        <div className={"header"}>
            <GlobalScoreboard />

            <Userbar />

            <Navigation />
        </div>
    );
};

export default Header;
