import { Matchup } from "@src/util/type/Matchup";
import { formatName } from "@src/util/playerFormatter";
import { Player } from "@src/util/type/Player";
import { MatchupPositions } from "@src/util/enum/IndexedMatchupPositions";

export type MatchupRowType = {
    id: string;
    matchupPosition: string;
    name: string;
    position: string;
    fitness: string;
};

const formatMatchupRow = (matchupPosition: string, player: Player): MatchupRowType => {
    const { id, position, fitness } = player;

    return {
        id: id,
        matchupPosition: matchupPosition,
        name: formatName(player),
        position,
        fitness,
    };
}

export const formatMatchupData = (matchup: Matchup): MatchupRowType[] => {
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
            formatMatchupRow("PG", pointGuard)
        );
    }

    if (shootingGuard !== undefined) {
        matchupData.push(
            formatMatchupRow("SG", shootingGuard)
        );
    }

    if (smallForward !== undefined) {
        matchupData.push(
            formatMatchupRow("SF", smallForward)
        );
    }

    if (powerForward !== undefined) {
        matchupData.push(
            formatMatchupRow("PF", powerForward)
        );
    }

    if (center !== undefined) {
        matchupData.push(
            formatMatchupRow("C", center)
        );
    }

    if (sixthMan !== undefined) {
        matchupData.push(
            formatMatchupRow("6", sixthMan)
        );
    }

    if (seventhMan !== undefined) {
        matchupData.push(
            formatMatchupRow("7", seventhMan)
        );
    }

    if (eightMan !== undefined) {
        matchupData.push(
            formatMatchupRow("8", eightMan)
        );
    }

    if (ninthMan !== undefined) {
        matchupData.push(
            formatMatchupRow("9", ninthMan)
        );
    }

    if (tenthMan !== undefined) {
        matchupData.push(
            formatMatchupRow("10", tenthMan)
        );
    }

    if (eleventhMan !== undefined) {
        matchupData.push(
            formatMatchupRow("11", eleventhMan)
        );
    }

    if (twelfthMan !== undefined) {
        matchupData.push(
            formatMatchupRow("12", twelfthMan)
        );
    }

    return matchupData;
}

type MatchupSave = {
    homeMatchup?: MatchupPositions;
    awayMatchup?: MatchupPositions;
};

type MatchupPositions = {
    pointGuard?: string;
    shootingGuard?: string;
    smallForward?: string;
    powerForward?: string;
    center?: string;
    sixthMan?: string;
    seventhMan?: string;
    eightMan?: string;
    ninthMan?: string;
    tenthMan?: string;
    eleventhMan?: string;
    twelfthMan?: string;
};

export const formatMatchupSaveData = (matchupRows: MatchupRowType[], isHome: boolean): MatchupSave => {
    const matchupSaveData = {};

    for (const [ index, matchupRow ] of matchupRows.entries()) {
        const { id } = matchupRow;

        matchupSaveData[MatchupPositions[index]] = id;
    }

    if (isHome) {
        return {
            homeMatchup: matchupSaveData,
        };
    }

    return {
        awayMatchup: matchupSaveData,
    };
}
