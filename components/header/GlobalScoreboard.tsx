import { useStateValue } from "@src/state/StateProvider";
import ScoreboardGame from "@src/components/header/ScoreboardGame";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Game } from "@src/util/type/Game";

const getGames = async (divisionId: string = "", callback: Dispatch<SetStateAction<Game[]>>) => {
    const gamesResponse = await fetch(`${process.env.API}/game`);
    const games = await gamesResponse.json();

    callback(games);
};

type Props = {
    divisionId?: string | null;
}

const GlobalScoreboard: React.FC = ({ divisionId }: Props) => {
    const [ { user: { username = null, team = null } }, dispatch ] = useStateValue();
    const [ games, setGames ] = useState<Game[]>([]);

    useEffect(() => {
        getGames(divisionId, setGames);
    }, [ divisionId ]);

    return (
        <div className={"header--scoreboard-container"}>
            <div className={"header--scoreboard"}>
                <div className={"scoreboard-card scoreboard-card--dark league-selector"}>
                    Week 1
                </div>

                {/*<div className={"date-selector"}></div>*/}

                <div className={"games--container"}>
                    {games.map(game => {
                        return <ScoreboardGame key={game.id} game={game} />
                    })}

                    <div className={"controls controls--next"} />
                </div>
            </div>
        </div>
    );
};

export default GlobalScoreboard;
