import { Position } from "@src/util/enum";

export type Player = {
    id?: string | null;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    number: string;
    position: Position;
    fitness: number;
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
    number: string;
    position: Position;
    fitness: number;
    country?: string | null;
    team?: string | null;
    contract?: Contract | null;
    age?: number | null;
    attributes?: Attributes | null;
};

export type Contract = {
    id: string;
    salaryPerYearDollar: number;
    yearsLeft: number;
};

export type Attributes = {
    id: string;
    overall: number;
    potential: number;
    height: number;
    strength: number;
    speed: number;
    jump: number;
    stamina: number;
    insideShot: number;
    dunk: number;
    freeThrow: number;
    midRangeShot: number;
    threePointShot: number;
    defensiveIq: number;
    offensiveIq: number;
    defensiveRebound: number;
    passing: number;
    rebounding: number;
};
