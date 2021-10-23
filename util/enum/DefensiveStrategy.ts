export enum DefensiveStrategy {
    BASE_DEFENSE = "BASE_DEFENSE",
    MAN_TO_MAN = "MAN_TO_MAN",
    TWO_THREE_ZONE = "TWO_THREE_ZONE",
    THREE_TWO_ZONE = "THREE_TWO_ZONE",
}

export const DefensiveStrategyLabelMap = {
    [DefensiveStrategy.BASE_DEFENSE]: "Base Defense",
    [DefensiveStrategy.MAN_TO_MAN]: "Man to Man",
    [DefensiveStrategy.TWO_THREE_ZONE]: "2-3 Zone",
    [DefensiveStrategy.THREE_TWO_ZONE]: "3-2 Zone",
};
