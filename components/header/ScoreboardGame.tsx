import { Game } from "@src/util/type/Game";
import { formatDateShort, formatTimeFriendly } from "@src/util/dateFormatter";
import TeamCard from "@src/components/header/GlobalScoreboard/TeamCard";

type Props = {
    game: Game;
}

const ScoreboardGame: React.FC<Props> = ({ game }: Props) => {
    const { homeTeam, awayTeam, scheduledDateTime, complete } = game;

    return (
        <a className={"scoreboard-card game-card"} href={`/games/${game.id}`}>
            <div className={"scorecard-overview"}>
                <div className={"date-time-title"}>
                    <span className={"date-time"}>
                        {complete ? (
                            'Final'
                        ) : (
                            <>{formatDateShort(scheduledDateTime)} - {formatTimeFriendly(scheduledDateTime)}</>
                        )}
                    </span>
                </div>
            </div>

            <div className={"scorecard-teams"}>
                <TeamCard team={homeTeam} complete={complete} />
                <TeamCard team={awayTeam} complete={complete} />
            </div>
        </a>
    );
};

export default ScoreboardGame;