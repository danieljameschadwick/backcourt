const ScoutedStrategyRow = ({ label, usage, children }) => {
    return (
        <li className={"strategy--row"}>
            <span className={"strategy--label"}>
                {label}
            </span>: <span className={"strategy--value"}>{children}</span> ({usage}%)
        </li>
    );
}

export default ScoutedStrategyRow;
