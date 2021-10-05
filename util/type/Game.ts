import { Team } from "@src/util/types";

export type Game = {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    homeMatchup: any;
    awayMatchup: any;
    scheduledDateTime: string;
}
