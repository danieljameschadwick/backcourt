import Navigation from "@src/components/layout/Navigation";
import dynamic from "next/dynamic";

const Userbar = dynamic(
    () => import('@src/components/layout/Userbar'),
    { ssr: false }
);

const Header: React.FC = () => {
    return (
        <div className={"header"}>
            <Userbar />

            <Navigation />
        </div>
    );
};

export default Header;
