export type State = {
    user: UserState;
};

type UserState = {
    username: string;
    accessToken: string;
};

export const InitialState = {
    user: {
        username: null,
        accessToken: null,
    },
};
