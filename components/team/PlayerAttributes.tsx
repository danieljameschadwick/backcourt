import { Attribute } from "@src/util/types";
import PlayerAttributeGroup from "@src/components/team/PlayerAttributeGroup";
import PlayerAttribute from "@src/components/team/PlayerAttribute";
import PlayerCard from "@src/components/team/PlayerCard";

type Props = {
    attributes: Attribute[];
};

const PlayerAttributes = ({ attributes }: Props) => {
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