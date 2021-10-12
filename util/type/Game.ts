import { Team } from "@src/util/types";
import { Matchup } from "@src/util/type/Matchup";

export type Game = {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    homeMatchup: Matchup;
    awayMatchup: Matchup;
    scheduledDateTime: string;
    complete: boolean;
}
