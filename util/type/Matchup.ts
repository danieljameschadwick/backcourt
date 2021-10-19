import { Player } from "@src/util/types";

export type Matchup = {
    id: string;
    pointGuard: Player;
    shootingGuard: Player;
    smallForward: Player;
    powerForward: Player;
    center: Player;
    sixthMan?: Player | null;
    seventhMan?: Player | null;
    eightMan?: Player | null;
    ninthMan?: Player | null;
    tenthMan?: Player | null;
    eleventhMan?: Player | null;
    twelfthMan?: Player | null;
}
