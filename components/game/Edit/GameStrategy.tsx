import GameCard from "@src/components/game/GameCard";

const GameStrategy = () => {
    return (
        <GameCard title={"Game Strategy"}>
            <div className={"form-group"}>
                <label>Offense:</label>

                <select name={"offense"}>
                    <option>Base Offense</option>
                    <option>Run and Gun</option>
                    <option>Motion</option>
                </select>
            </div>

            <div className={"form-group"}>
                <label>Defense:</label>

                <select name={"defense"}>
                    <option>Base Defense</option>
                    <option>2-3 Zone</option>
                    <option>3-2 Zone</option>
                    <option>1-3-1 Zone</option>
                    <option>Man to Man</option>
                </select>
            </div>

            <div className={"form-group"}>
                <label>Pace:</label>

                <select name={"pace"}>
                    <option>Normal</option>
                    <option>Crunch time  (FIT%-, INJ%+)</option>
                    <option>Take is easy (FIT%+)</option>
                </select>
            </div>
        </GameCard>
    );
};

export default GameStrategy;
