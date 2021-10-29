import GameCard from "@src/components/game/GameCard";

const ScoutingReport = () => {
    // - Scouting Report
    //   - Ones to watch (highest scorers),
    //   - offense used %
    //   - defense used percentage

    return (
        <GameCard title={"Scouting Report"}>
            {/* this should be added after content and be smaller, maybe grayed out too */}
            <p>
                There haven&apos;t been enough games played this season for an in-depth look. Some values may have been
                recorded from the previous season.
            </p>

            <hr />

            <div>
                <h4>Common Strategy</h4>

                <ul>
                    <ScoutedStrategyRow label={"Offense"} usage={74}>
                        Low Post
                    </ScoutedStrategyRow>
                    <ScoutedStrategyRow label={"Defense"} usage={87}>
                        Man to Man
                    </ScoutedStrategyRow>
                    <ScoutedStrategyRow label={"Pace"} usage={95}>
                        Normal
                    </ScoutedStrategyRow>
                </ul>
            </div>

            <hr />

            <div>
                <h4>Statistic Leaders</h4>

                <div>
                    <div>
                        Lebron - points 24PPG
                    </div>

                    <div>
                        Anthony Davis - rebounds 13RPG
                    </div>

                    <div>
                        Lebron James - assists 7APG
                    </div>
                </div>
            </div>
        </GameCard>
    );
};

const ScoutedStrategyRow = ({ label, usage, children }) => {
    return (
        <li>
            <span className={"strategy--label"}>{label}</span>: {children} ({usage}%)
        </li>
    );
}

export default ScoutingReport;
