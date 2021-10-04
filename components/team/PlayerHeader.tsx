import { formatDate } from "@src/util/dateFormatter";
import { Team, TeamPlayer } from "@src/util/types";
import { ShortPosition } from "@src/util/enum";

type Props = {
    team: Team;
    player: TeamPlayer;
};

const PlayerHeader = ({ team, player }: Props) => {
    return (
        <div className={"card-player--header"}>
            <div className={"pro-team-container"}>
                <div className={"player-headshot"}>
                    <img height={"155"} alt={""} src={"/image/player/avatar.png"} />
                </div>
            </div>

            <div className={"player-header-gradient"} />

            <div className={"player-info"}>
                <div className={"quick-info"}>
                    <div className={"player-jersey"}>{player.number}</div>
                    <div className={"player-position"}>{ShortPosition[player.position]}</div>
                </div>
                <div className={"player-container"}>
                    <div className={"player-name"}>
                        <div>{player.firstName}</div>

                        <div className={"text--light-bold"}>
                            {player.lastName}
                        </div>
                    </div>

                    <span className={"player-team-name"}>{team.name}, {team.abbreviation}</span>

                    <div className={"recent-stat-table"}>
                        <div className={"stat"}>
                            <div className={"player-stat-label"}>DoB:</div>
                            <div className={"stat-value"}>
                                {formatDate(new Date(player.dateOfBirth))}
                            </div>
                        </div>

                        <div className={"stat"}>
                            <div className={"player-stat-label"}>Country:</div>
                            <div className={"stat-value"}>-</div>
                        </div>

                        <div className={"stat"}>
                            <div className={"player-stat-label"}>Role:</div>
                            <div className={"stat-value"}>Starter</div>
                        </div>

                        <div className={"stat"}>
                            <div className={"player-stat-label"}>Experience:</div>
                            <div className={"stat-value"}>All Star</div>
                        </div>
                    </div>
                </div>
                <div className={"stat-column recent-stat-table"}>
                    <div className={"stat ranking"}>
                        <div className={"player-stat-label"}>League Rank:</div>
                        <div className={"player-stat-value"}># -</div>
                    </div>

                    <div className={"recent-game-label"}>
                        Last 10 games:
                    </div>

                    <div className={"stat"}>
                        <div className={"player-stat-label"}>PTS:</div>
                        <div className={"player-stat-value"}>-</div>
                    </div>

                    <div className={"stat"}>
                        <div className={"player-stat-label"}>AST:</div>
                        <span className={"player-stat-value"}>-</span>
                    </div>

                    <div className={"stat"}>
                        <div className={"player-stat-label"}>REB:</div>
                        <span className={"player-stat-value"}>-</span>
                    </div>

                    <div className={"stat"}>
                        <div className={"player-stat-label"}>TOV:</div>
                        <span className={"player-stat-value"}>-</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerHeader;