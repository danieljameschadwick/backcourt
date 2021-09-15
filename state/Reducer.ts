import { UserReducer } from "@src/state/reducers/UserReducer";

export const Reducer = ({ user }, action) => {
    return {
        user: UserReducer(user, action),
    };
};
