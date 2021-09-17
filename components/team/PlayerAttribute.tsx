import { AttributeLabelMap } from "@src/util/enum/AttributeEnum";

type Props = {
    name: string;
    overall: number;
};

const PlayerAttribute = ({ name, overall }: Props) => {
    return (
        <div className={"attribute"}>
            <span className={"attribute--label"}>
                {AttributeLabelMap[name]}:
            </span>

            <span className={"attribute--overall"}>
                {overall}
            </span>
        </div>
    );
};

export default PlayerAttribute;