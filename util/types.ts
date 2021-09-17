import { Position } from "@src/util/enum";
import { AttributeType } from "@src/util/enum/AttributeType";
import { AttributeEnum } from "@src/util/enum/AttributeEnum";

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
    attributes: Attribute[];
};

export type Contract = {
    id: string;
    salaryPerYearDollar: number;
    yearsLeft: number;
};

export type Attribute = {
    id: string;
    name: AttributeEnum;
    type: AttributeType;
    value: number;
};
