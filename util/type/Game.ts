import { GameTeam } from "@src/util/type/GameTeam";

export type Game = {
    id: string;
    homeTeam: GameTeam;
    awayTeam: GameTeam;
    scheduledDateTime: string;
    complete: boolean;
}
