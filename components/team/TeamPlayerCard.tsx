import { formatDate } from "@src/util/dateFormatter";
import { TeamPlayer } from "@src/util/types";
import { ShortPosition } from "@src/util/enum";

const releasePlayer = async (teamId: string, playerId: string): Promise<void> => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };

    await fetch(`${process.env.API}/team/${teamId}/release/${playerId}`, requestOptions);
    window.location.reload();
};

type Props = {
    player: TeamPlayer;
};

const TeamPlayerCard = ({ player }: Props) => {
    return (
        <div className={"team-player--card"}>
            <div className={"pro-team-container"}>
                <div className={"player-headshot"}>
                    <img height={"155"} alt={""} src={"/image/player/avatar.png"} />
                </div>
            </div>

            <div className={"player-header-gradient"} />

            <div className="player-info">
                <div className={"quick-info"}>
                    <div className="player-jersey">{ player.number }</div>
                    <div className="player-position">{ ShortPosition[player.position]}</div>
                </div>
                <div className={"player-container"}>
                    <div className={"player-name"}>
                        <div>{ player.firstName }</div>
                        <div className={"text--light-bold"}>
                            { player.lastName }
                        </div>
                    </div>
                    <span className="player-team-name">Chicago Bulls</span>
                    <div className="statTable">
                        <div className="stat">
                            <div className="player-stat-label">DoB:</div>
                            <div className="stat-value">{formatDate(new Date(player.dateOfBirth))}</div>
                        </div>

                        <div className="stat">
                            <div className="player-stat-label">Country:</div>
                            <div className="stat-value">-</div>
                        </div>

                        <div className="stat">
                            <div className="player-stat-label">Role:</div>
                            <div className="stat-value">Starter</div>
                        </div>

                        <div className="stat">
                            <div className="player-stat-label">Experience:</div>
                            <div className="stat-value">All Star</div>
                        </div>
                    </div>
                </div>
                <div className="stat-column statTable">
                    <div className="stat ranking">
                        <div className="player-stat-label">League Rank:</div>
                        <div className="player-stat-value">#8</div>
                    </div>

                    <div className="recent-game-label">
                        Last 10 games:
                    </div>

                    <div className="stat">
                        <div className="player-stat-label">PTS:</div>
                        <div className="player-stat-value">--</div>
                    </div>

                    <div className={"stat"}>
                        <div className="player-stat-label">AST:</div>
                        <span className="player-stat-value">-</span>
                    </div>

                    <div className={"stat"}>
                        <div className="player-stat-label">REB:</div>
                        <span className="player-stat-value">-</span>
                    </div>

                    <div className={"stat"}>
                        <div className="player-stat-label">TOV:</div>
                        <span className="player-stat-value">-</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPlayerCard;