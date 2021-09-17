import ProgressBar from "@src/components/util/ProgressBar";

type Props = {
    label: string;
    overall: number;
};

const PlayerAttributeGroup = ({ label, overall }: Props) => {
    return (
        <div className={"attribute-group"}>
            <span className={"attribute-label"}>
                {label}
            </span>

            <span className={"overall"}>
                {overall}
            </span>

            <ProgressBar percentage={overall} showPercentage={false} />
        </div>
    );
};

export default PlayerAttributeGroup;