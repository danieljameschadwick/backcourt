import { createContext, useContext, useEffect, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [ state ]);

    return (
        <StateContext.Provider value={[ state, dispatch ]}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);
