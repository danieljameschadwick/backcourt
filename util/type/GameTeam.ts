import { Team } from "@src/util/type/Team";
import { Matchup } from "@src/util/type/Matchup";
import { Strategy } from "@src/util/type/Strategy";

export type GameTeam = {
    id: string;
    team: Team;
    matchup: Matchup;
    strategy: Strategy;
}
