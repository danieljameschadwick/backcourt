import { AppProps } from "next/app";
import Layout from "@src/components/layout/Layout";

import "@src/styles/base.scss";
import { StateProvider } from "@src/state/StateProvider";
import { Reducer } from "@src/state/Reducer";
import { InitialState, State } from "@src/state/InitialState";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <StateProvider initialState={getInitialState()} reducer={Reducer}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StateProvider>
    );
};


const getInitialState = (): State => {
    try {
        return JSON.parse(localStorage.getItem('state'));
    } catch (error) {
        return InitialState;
    }
}

export default App;
