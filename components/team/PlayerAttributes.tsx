import { Attribute } from "@src/util/type/Player";
import PlayerAttributeGroup from "@src/components/team/PlayerAttributeGroup";
import PlayerAttribute from "@src/components/team/PlayerAttribute";
import PlayerCard from "@src/components/team/PlayerCard";

type Props = {
    finishing: number;
    shooting: number;
    defense: number;
    athleticism: number;
    attributes: Attribute[];
};

const PlayerAttributes = ({ finishing, shooting, defense, athleticism, attributes }: Props) => {
    return (
        <PlayerCard title={"Attributes"} showControls={true}>
            <div className={"attribute-groups"}>
                <PlayerAttributeGroup
                    label={"Finishing"}
                    overall={finishing}
                />

                <PlayerAttributeGroup
                    label={"Shooting"}
                    overall={shooting}
                />

                <PlayerAttributeGroup
                    label={"Defense"}
                    overall={defense}
                />

                <PlayerAttributeGroup
                    label={"Athleticism"}
                    overall={athleticism}
                />
            </div>

            <div className={"attributes"}>
                {attributes ? attributes.map((attribute) => (
                    <PlayerAttribute
                        key={attribute.id}
                        name={attribute.name}
                        overall={attribute.value}
                    />
                )) : ""}
            </div>
        </PlayerCard>
    );
};

export default PlayerAttributes;
