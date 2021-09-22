import { Team, TeamPlayer } from "@src/util/types";
import PlayerHeader from "@src/components/team/PlayerHeader";
import PlayerAttributes from "@src/components/team/PlayerAttributes";
import PlayerRecentGames from "@src/components/team/PlayerRecentGames";

const releasePlayer = async (teamId: string, playerId: string): Promise<void> => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };

    await fetch(`${process.env.API}/team/${teamId}/release/${playerId}`, requestOptions);
    window.location.reload();
};

type Props = {
    team: Team;
    player: TeamPlayer;
};

const TeamPlayerCard = ({ team, player }: Props) => {
    const { attributes } = player;

    return (
        <div className={"team-player--card"}>
            <PlayerHeader team={team} player={player} />

            { attributes ? (
                <PlayerAttributes attributes={attributes} />
            ) : '' }

            { attributes ? (
                <PlayerRecentGames games={[]} />
            ) : '' }
        </div>
    );
};

export default TeamPlayerCard;
