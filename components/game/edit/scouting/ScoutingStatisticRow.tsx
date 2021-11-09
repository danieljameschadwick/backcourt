const ScoutingStatisticRow = ({ label, value }) => {
    return (
        <div>
            <span>{value}</span>
            <span className={"header"}>{label}</span>
        </div>
    );
};

export default ScoutingStatisticRow;
