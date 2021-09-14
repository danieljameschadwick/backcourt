import { UserReducer } from "@src/state/reducers/UserReducer";

export const Reducer = ({ user }, action) => ({
    user: UserReducer(user, action),
});
