import { Player } from "@src/util/type/Player";

export const formatName = (player: Player): string => {
    return `${player.firstName} ${player.lastName}`;
}
