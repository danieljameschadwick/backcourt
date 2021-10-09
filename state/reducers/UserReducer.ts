export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.username,
            };

        case 'setTeam':
            return {
                ...state,
                team: action.team,
            };

        case 'setAccessToken':
            return {
                ...state,
                accessToken: action.accessToken,
            };

        default:
            return state;
    }
};
