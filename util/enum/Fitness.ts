export enum Fitness {
    "READY" = "READY",
    "BACK" = "BACK",
    "OUT" = "OUT",
}

export const FitnessToFriendly = {
    [Fitness.READY]: "Ready",
    [Fitness.BACK]: "Back",
    [Fitness.OUT]: "Out",
}
