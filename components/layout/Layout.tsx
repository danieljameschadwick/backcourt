import Header from "@src/components/layout/Header";
import { StateProvider } from "@src/state/StateProvider";
import { InitialState, State } from "@src/state/InitialState";
import { Reducer } from "@src/state/Reducer";

type Props = {
    children: React.FC;
};

const Layout: React.FC = ({ children }: Props) => {
    return (
        <StateProvider initialState={getInitialState()} reducer={Reducer}>
            <Header />

            <main>{children}</main>
        </StateProvider>
    )
};

const getInitialState = (): State => {
    try {
        return JSON.parse(localStorage.getItem('state'));
    } catch (error) {
        return InitialState;
    }
}

export default Layout;
