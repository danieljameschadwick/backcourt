import GameCard from "@src/components/game/GameCard";
import { Strategy } from "@src/util/type/Strategy";
import { Game } from "@src/util/type/Game";
import { OffensiveStrategy, OffensiveStrategyLabelMap } from "@src/util/enum/OffensiveStrategy";
import { DefensiveStrategy, DefensiveStrategyLabelMap } from "@src/util/enum/DefensiveStrategy";
import { Pace, PaceLabelMap } from "@src/util/enum/Pace";
import { Formik } from "formik";
import * as Yup from "yup";

const StrategySchema = Yup.object().shape({
    offense: Yup.string().required("Required"), // @TODO: enum
    defense: Yup.string().required("Required"),
    pace: Yup.string().required("Required"),
});

type Props = {
    game: Game;
    strategy: Strategy;
    isHome: boolean;
}

const GameStrategy = ({ game, strategy, isHome }: Props) => {
    const {
        offense = OffensiveStrategy.BASE_OFFENSE,
        defense = DefensiveStrategy.BASE_DEFENSE,
        pace = Pace.NORMAL,
    } = strategy;

    return (
        <GameCard title={"Game Strategy"}>

            <Formik
                initialValues={{
                    offense,
                    defense,
                    pace,
                }}
                validationSchema={StrategySchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);

                    setSubmitting(false);
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      errors,
                      touched,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={"form-group"}>
                            <label>Offense:</label>

                            <select
                                name={"offense"}
                                value={values.offense}
                                onChange={handleChange}
                            >
                                {Object.values(OffensiveStrategy).map((offensiveStrategy) => {
                                    return (
                                        <option
                                            key={offensiveStrategy}
                                            value={offensiveStrategy}
                                        >
                                            {OffensiveStrategyLabelMap[offensiveStrategy]}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label>Defense:</label>

                            <select
                                name={"defense"}
                                value={values.defense}
                                onChange={handleChange}
                            >
                                {Object.values(DefensiveStrategy).map((defensiveStrategy) => {
                                    return (
                                        <option
                                            key={defensiveStrategy}
                                            value={defensiveStrategy}
                                        >
                                            {DefensiveStrategyLabelMap[defensiveStrategy]}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label>Pace:</label>

                            <select
                                name={"pace"}
                                value={values.pace}
                                onChange={handleChange}
                            >
                                {Object.values(Pace).map((pace) => {
                                    return (
                                        <option
                                            key={pace}
                                            value={pace}
                                        >
                                            {PaceLabelMap[pace]}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Save
                        </button>
                    </form>
                )}
            </Formik>
        </GameCard>
    );
};

export default GameStrategy;
