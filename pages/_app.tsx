import { AppProps } from "next/app";
import Layout from "@src/components/layout/Layout";

import "@src/styles/base.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
