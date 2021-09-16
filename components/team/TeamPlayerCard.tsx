import { TeamPlayer } from "@src/util/types";
import PlayerHeader from "@src/components/team/PlayerHeader";
import PlayerAttributes from "@src/components/team/PlayerAttributes";

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
    const { attributes = null } = player;

    return (
        <div className={"team-player--card"}>
            <PlayerHeader player={player} />

            { attributes ? (
                <PlayerAttributes attributes={attributes} />
            ) : '' }
        </div>
    );
};

export default TeamPlayerCard;
