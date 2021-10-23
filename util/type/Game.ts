import { Team } from "@src/util/type/Team";
import { Matchup } from "@src/util/type/Matchup";
import { Strategy } from "@src/util/type/Strategy";

export type Game = {
    id: string;
    homeTeam: Team;
    homeMatchup: Matchup;
    homeStrategy: Strategy;
    awayTeam: Team;
    awayMatchup: Matchup;
    awayStrategy: Strategy;
    scheduledDateTime: string;
    complete: boolean;
}
