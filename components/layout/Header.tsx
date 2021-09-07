import Userbar from "@src/components/layout/Userbar";
import Navigation from "@src/components/layout/Navigation";

const Header: React.FC = () => {
    return (
        <div className={"header"}>
            <Userbar />

            <Navigation />
        </div>
    );
};

export default Header;
