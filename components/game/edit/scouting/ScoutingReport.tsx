import GameCard from "@src/components/game/GameCard";
import ScoutingCommonStrategy from "@src/components/game/edit/scouting/ScoutingCommonStrategy";
import ScoutingStatisticLeaders from "@src/components/game/edit/scouting/ScoutingStatisticLeaders";

const ScoutingReport = () => {
    // - Scouting Report
    //   - Ones to watch (highest scorers),
    //   - offense used %
    //   - defense used percentage

    return (
        <GameCard title={"Scouting Report"}>
            {/* this should be added after content and be smaller, maybe grayed out too
                maybe similar to data-help */}
            <p>
                There haven&apos;t been enough games played this season for an in-depth look. Some values may have been
                recorded from the previous season.
            </p>

            <hr />

            <ScoutingCommonStrategy />

            <hr />

            <ScoutingStatisticLeaders />
        </GameCard>
    );
};

export default ScoutingReport;
