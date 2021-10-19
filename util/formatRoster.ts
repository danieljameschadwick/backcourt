import { Matchup } from "@src/util/type/Matchup";
import { formatName } from "@src/util/playerFormatter";
import { Fitness } from "@src/util/enum/Fitness";
import { Player } from "@src/util/types";
import { ShortPosition } from "@src/util/enum/Position";

export type RosterRowType = {
    id: string;
    name: string;
    position: string;
    fitness: string;
};

const formatRosterRow = (player: Player): RosterRowType => {
    const { id, position } = player;

    return {
        id: id,
        name: formatName(player),
        position: ShortPosition[position],
        fitness: Fitness.READY,
    };
}

export const formatRosterData = (matchup: Matchup): RosterRowType[] => {
    const {
        pointGuard = undefined,
        shootingGuard = undefined,
        smallForward = undefined,
        powerForward = undefined,
        center = undefined,
        sixthMan = undefined,
        seventhMan = undefined,
        eightMan = undefined,
        ninthMan = undefined,
        tenthMan = undefined,
        eleventhMan = undefined,
        twelfthMan = undefined,
    } = matchup;
    const matchupData = [];

    if (pointGuard !== undefined) {
        matchupData.push(
            formatRosterRow(pointGuard)
        );
    }

    if (shootingGuard !== undefined) {
        matchupData.push(
            formatRosterRow(shootingGuard)
        );
    }

    if (smallForward !== undefined) {
        matchupData.push(
            formatRosterRow(smallForward)
        );
    }

    if (powerForward !== undefined) {
        matchupData.push(
            formatRosterRow(powerForward)
        );
    }

    if (center !== undefined) {
        matchupData.push(
            formatRosterRow(center)
        );
    }

    if (sixthMan !== undefined) {
        matchupData.push(
            formatRosterRow(sixthMan)
        );
    }

    if (seventhMan !== undefined) {
        matchupData.push(
            formatRosterRow(seventhMan)
        );
    }

    if (eightMan !== undefined) {
        matchupData.push(
            formatRosterRow(eightMan)
        );
    }

    if (ninthMan !== undefined) {
        matchupData.push(
            formatRosterRow(ninthMan)
        );
    }

    if (tenthMan !== undefined) {
        matchupData.push(
            formatRosterRow(tenthMan)
        );
    }

    if (eleventhMan !== undefined) {
        matchupData.push(
            formatRosterRow(eleventhMan)
        );
    }

    if (twelfthMan !== undefined) {
        matchupData.push(
            formatRosterRow(twelfthMan)
        );
    }

    return matchupData;
};
