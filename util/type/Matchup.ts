import { Player } from "@src/util/types";

export type Matchup = {
    id: string;
    pointGuard: Player;
    shootingGuard: Player;
    smallForward: Player;
    powerForward: Player;
    center: Player;
}
