export type Player = {
    id?: string | null;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    team?: Team | null;
    contract?: Contract | null;
    age?: number | null;
};

export type Team = {
    id: string;
    name: string;
    abbreviation: string;
    players: TeamPlayer[];
};

export type TeamPlayer = {
    id?: string | null;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    team?: string | null;
    age?: number | null;
};

export type Contract = {
    id: string;
    salaryPerYearCentesimal: number;
    yearsLeft: number;
};
