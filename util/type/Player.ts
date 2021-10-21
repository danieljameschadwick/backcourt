import { Position } from "@src/util/enum/Position";
import { Fitness } from "@src/util/enum/Fitness";
import { AttributeEnum } from "@src/util/enum/AttributeEnum";
import { AttributeType } from "@src/util/enum/AttributeType";
import { Team } from "@src/util/type/Team";

export type Player = {
    id?: string | null;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    number: string;
    position: Position;
    fitness: Fitness;
    team?: Team | null;
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
