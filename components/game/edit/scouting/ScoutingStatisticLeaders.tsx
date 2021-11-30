import ScoutingStatisticGroup from "@src/components/game/edit/scouting/ScoutingStatisticGroup";
import ScoutingStatisticRow from "@src/components/game/edit/scouting/ScoutingStatisticRow";

const ScoutingStatisticLeaders = () => {
    return (
        <div>
            <h4>Statistic Leaders</h4>

            <div className={"statistics-leaders--wrapper"}>
                <ScoutingStatisticGroup label={"Points"} player={{firstName: "LeBron", lastName: "James" }}>
                    <ScoutingStatisticRow label={"PPG"} value={23.4} />
                    <ScoutingStatisticRow label={"FG%"} value={61.2} />
                    <ScoutingStatisticRow label={"FT%"} value={89.9} />
                </ScoutingStatisticGroup>

                <ScoutingStatisticGroup label={"Rebounds"} player={{firstName: "Anthony", lastName: "Davis" }}>
                    <ScoutingStatisticRow label={"RPG"} value={12.0} />
                    <ScoutingStatisticRow label={"DREB"} value={8.9} />
                    <ScoutingStatisticRow label={"OREB"} value={3.1} />
                </ScoutingStatisticGroup>

                <ScoutingStatisticGroup label={"Assists"} player={{firstName: "LeBron", lastName: "James" }}>
                    <ScoutingStatisticRow label={"APG"} value={7.2} />
                    <ScoutingStatisticRow label={"TOPG"} value={0.4} />
                </ScoutingStatisticGroup>
            </div>
        </div>
    );
}

export default ScoutingStatisticLeaders;