type Props = {
    value: number;
    label: string;
};

const ScoutingStatisticRow = ({ value, label }) => {
    return (
        <div className={"statistic-group-item"}>
            <span className={"statistic-value-item"}>
                <span className={"statistic-value"}>{value}</span>
                <span className={"statistic-label"}>{label}</span>
            </span>
        </div>
    );
};

export default ScoutingStatisticRow;
