import "@src/styles/base.scss";
import { AppProps } from "next/app";
import Layout from "@src/components/layout/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
