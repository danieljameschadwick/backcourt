import GameCard from "@src/components/game/GameCard";

const ScoutingReport = () => {
    // - Scouting Report
    //   - Ones to watch (highest scorers),
    //   - offense used %
    //   - defense used percentage

    return (
        <GameCard title={"Scouting Report"}>
            {/* this should be added after content and be smaller, maybe grayed out too */}
            There haven&apos;t been enough games played this season for an in-depth look. Some values may have been
            recorded from the previous season.
        </GameCard>
    );
};

export default ScoutingReport;
