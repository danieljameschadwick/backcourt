type Props = {
    label: string;
    overall: number;
};

const PlayerAttribute = ({ label, overall }: Props) => {
    return (
        <div className={"attribute"}>
            <span className={"attribute--label"}>
                {label}:
            </span>

            <span className={"attribute--overall"}>
                {overall}
            </span>
        </div>
    );
};

export default PlayerAttribute;