import { Attributes } from "@src/util/types";
import PlayerAttribute from "@src/components/team/PlayerAttribute";

type Props = {
    attributes: Attributes;
};

const PlayerAttributes = ({ attributes }: Props) => {
    return (
        <div className={"card--attributes card--container"}>
            <div className={"card--title"}>
                <h3 className={"title"}>Attributes</h3>
            </div>

            <div className={"card--content"}>
                <div className={"attribute-groups"}>
                    <PlayerAttribute
                        label={"Finishing"}
                        overall={89}
                    />

                    <PlayerAttribute
                        label={"Shooting"}
                        overall={77}
                    />

                    <PlayerAttribute
                        label={"Defense"}
                        overall={81}
                    />

                    <PlayerAttribute
                        label={"Playmaking"}
                        overall={72}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayerAttributes;