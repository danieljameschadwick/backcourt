import "@src/styles/base.scss";
import { AppProps } from "next/app";
import Layout from "@src/components/layout/Layout";
import { InitialState } from "@src/state/InitialState";
import { Reducer } from "@src/state/Reducer";
import { StateProvider } from "@src/state/StateProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <StateProvider initialState={InitialState} reducer={Reducer}>
                <Component {...pageProps} />
            </StateProvider>
        </Layout>
    );
};

export default App;
