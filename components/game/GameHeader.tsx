import { Game } from "@src/util/type/Game";
import HeaderTeamCard from "@src/components/game/HeaderTeamCard";
import { formatDateFriendly, formatDateShort, formatTimeFriendly } from "@src/util/dateFormatter";

type Props = {
    game: Game;
};

const GameHeader = ({ game }: Props) => {
    const {
        homeTeam: {
            team: homeTeam,
        }, awayTeam: {
            team: awayTeam,
        },
        scheduledDateTime,
    } = game;

    return (
        <div className={"game--header-wrapper"}>
            <div className={"game--header"}>
                <HeaderTeamCard team={awayTeam} homeTeam={false} />

                <div className={"game-status"}>
                    {scheduledDateTime ? (
                        <>
                            <span className={"game-status--date"}>
                                {formatDateFriendly(scheduledDateTime)}
                            </span>

                            <span className={"game-status--short-date"}>
                                {formatDateShort(scheduledDateTime)}
                            </span>

                            <span className={"game-status--time"}>
                                {formatTimeFriendly(scheduledDateTime)} GMT
                            </span>
                        </>
                    ) : ""}
                </div>

                <HeaderTeamCard team={homeTeam} />
            </div>

            <div className={`post-header hidden`}>
                {scheduledDateTime ? (
                    <>
                        <span className={"game-status--date"}>
                            {formatDateFriendly(scheduledDateTime)}, {formatTimeFriendly(scheduledDateTime)} GMT
                        </span>
                    </>
                ) : ""}
            </div>
        </div>
    );
};

export default GameHeader;