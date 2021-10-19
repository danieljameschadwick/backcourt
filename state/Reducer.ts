import { UserReducer } from "@src/state/reducers/UserReducer";

export const Reducer = (state, action) => {
    const { user } = state || {};

    return {
        user: UserReducer(user, action),
    };
};
