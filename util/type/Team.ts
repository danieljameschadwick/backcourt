import { Position } from "@src/util/enum/Position";
import { Attribute, Contract } from "@src/util/type/Player";

export type Team = {
    id: string;
    name: string;
    abbreviation: string;
    division?: Division | null;
    record: TeamRecord;
    players: TeamPlayer[];
};

export type Division = {
    id: string;
    name: string;
    teams: Team[];
};

export type TeamRecord = {
    homeRecord: number;
    awayRecord: number;
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
    finishing: number;
    shooting: number;
    defense: number;
    athleticism: number;
    attributes: Attribute[];
};
