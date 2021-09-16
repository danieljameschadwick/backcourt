export type User = {
    id: string;
    username: string;
    team?: UserTeam | null;
};

export type UserTeam = {
    id: string;
    name: string;
    abbreviation: string;
};
