export type CreateTeamDTO = {
    name: string;
    abbreviation: string;
};

export type CreatePlayerDTO = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    team?: string|null;
};
