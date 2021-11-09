const ScoutedStrategyRow = ({ label, usage, children }) => {
    return (
        <li className={"strategy--row"}>
            <span className={"strategy--label"}>
                {label}
            </span>:

            {children}

            (<span className={"strategy--usage"}>{usage}%</span>)
        </li>
    );
}

export default ScoutedStrategyRow;
