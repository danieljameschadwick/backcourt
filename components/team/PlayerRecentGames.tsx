import PlayerCard from "@src/components/team/PlayerCard";

type Props = {
    games: any[];
};

const PlayerRecentGames = ({ games }: Props) => {
    return (
        <PlayerCard title={"Recent Games"} showControls={true}>
            <></>
        </PlayerCard>
    );
};

export default PlayerRecentGames;
