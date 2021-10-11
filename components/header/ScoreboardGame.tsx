import { Game } from "@src/util/type/Game";

type Props = {
    game: Game;
}

const ScoreboardGame: React.FC<Props> = ({ game }: Props) => {
    const { homeTeam, awayTeam } = game;

    return (
        <a className={"scoreboard-card game-card"} href={`/games/${game.id}`}>
            <div className={"scorecard-overview"}>
                <div className={"date-time-title"}>
                    <span className={"date-time"}>
                        Final
                    </span>
                </div>
            </div>

            <div className={"scorecard-details"}>
                <ul className={"scorecard-teams"}>
                    <li className={"team cscore_item--away cscore_item--winner"}>
                        <div className={"team--logo"}>
                            <img height={14} alt={""} src={"/image/player/avatar.png"} />
                        </div>

                        <div className={"team--overview icon-font-after"}>
                            <div className={"team--name"}>
                                {/*<span className={"cscore_name cscore_name--long"}>Los Angeles Rams</span>*/}
                                {/*<span className={"cscore_name cscore_name--short"}>Rams</span>*/}
                                <span className={"cscore_name cscore_name--abbrev"}>{homeTeam.abbreviation}</span>
                            </div>
                            <div className={"team--score"}>
                                101
                            </div>
                        </div>
                    </li>
                    <li className={"team cscore_item--home lastcscore_item--loser"}>
                        <div className={"team--logo"}>
                            <img height={14} alt={""} src={"/image/player/avatar.png"} />
                        </div>

                        <div className={"team--overview"}>
                            <div className={"team--name"}>
                                {/*<span className={"cscore_name cscore_name--long"}>Seattle Seahawks</span>*/}
                                {/*<span className={"cscore_name cscore_name--short"}>Seahawks</span>*/}
                                <span className={"cscore_name cscore_name--abbrev"}>{awayTeam.abbreviation}</span>
                            </div>
                            <div className={"team--score"}>
                                103
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </a>
    );
};

export default ScoreboardGame;