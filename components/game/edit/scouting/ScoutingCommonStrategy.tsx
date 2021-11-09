import ScoutedStrategyRow from "@src/components/game/edit/scouting/ScoutedStrategyRow";

const ScoutingCommonStrategy = () => {
    return (
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
    );
}

export default ScoutingCommonStrategy;