import { OffensiveStrategy } from "@src/util/enum/OffensiveStrategy";
import { DefensiveStrategy } from "@src/util/enum/DefensiveStrategy";
import { Pace } from "@src/util/enum/Pace";

export type Strategy = {
    id: string;
    offense: OffensiveStrategy;
    defense: DefensiveStrategy;
    pace: Pace;
}
