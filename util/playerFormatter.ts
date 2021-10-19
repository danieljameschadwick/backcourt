import { Player } from "@src/util/types";

export const formatName = (player: Player): string => {
    return `${player.firstName} ${player.lastName}`;
}
