import { Attributes } from "@src/util/types";
import PlayerAttributeGroup from "@src/components/team/PlayerAttributeGroup";
import PlayerAttribute from "@src/components/team/PlayerAttribute";
import PlayerCard from "@src/components/team/PlayerCard";

type Props = {
    attributes: Attributes;
};

const PlayerAttributes = ({ attributes }: Props) => {
    const {
        overall,
        potential,
        height,
        strength,
        speed,
        jump,
        stamina,
        insideShot,
        dunk,
        freeThrow,
        midRangeShot,
        threePointShot,
        defensiveIq,
        offensiveIq,
        defensiveRebound,
        passing,
        rebounding,
    } = attributes;

    return (
        <PlayerCard title={"Attributes"} showControls={true}>
            <div className={"attribute-groups"}>
                <PlayerAttributeGroup
                    label={"Finishing"}
                    overall={89}
                />

                <PlayerAttributeGroup
                    label={"Shooting"}
                    overall={77}
                />

                <PlayerAttributeGroup
                    label={"Defense"}
                    overall={81}
                />

                <PlayerAttributeGroup
                    label={"Athleticism"}
                    overall={72}
                />
            </div>

            <div className={"attributes"}>
                <PlayerAttribute label={"Overall"} overall={overall} />
                <PlayerAttribute label={"Potential"} overall={potential} />
                <PlayerAttribute label={"Height"} overall={height} />
                <PlayerAttribute label={"Strength"} overall={strength} />
                <PlayerAttribute label={"Speed"} overall={speed} />
                <PlayerAttribute label={"Jump"} overall={jump} />
                <PlayerAttribute label={"Stamina"} overall={stamina} />
                <PlayerAttribute label={"Inside Shot"} overall={insideShot} />
                <PlayerAttribute label={"Dunk"} overall={dunk} />
                <PlayerAttribute label={"Free Throw"} overall={freeThrow} />
                <PlayerAttribute label={"Midrange Shot"} overall={midRangeShot} />
                <PlayerAttribute label={"3PT Shot"} overall={threePointShot} />
                <PlayerAttribute label={"Def. IQ"} overall={defensiveIq} />
                <PlayerAttribute label={"Off. IQ"} overall={offensiveIq} />
                <PlayerAttribute label={"Passing"} overall={passing} />
                <PlayerAttribute label={"Rebounding"} overall={rebounding} />
                <PlayerAttribute label={"Def. Reb"} overall={defensiveRebound} />
            </div>
        </PlayerCard>
    );
};

export default PlayerAttributes;