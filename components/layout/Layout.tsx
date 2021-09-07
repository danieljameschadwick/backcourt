import Header from "@src/components/layout/Header";

type Props = {
    children: React.FC;
};

const Layout: React.FC = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
};

export default Layout;
