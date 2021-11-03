import GameCard from "@src/components/game/GameCard";
import { formatRosterData } from "@src/util/formatRoster";
import { GameTeam } from "@src/util/type/GameTeam";

type Props = {
    gameTeam: GameTeam;
};

const Roster = ({ gameTeam }: Props) => {
    const { team, matchup } = gameTeam;

    return (
        <GameCard title={`${team.name} Roster`} additionalClasses={"table--card table--roster"}>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th className={"position"}>Pos.</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {formatRosterData(matchup).map(({ id, position, name }) => (
                        <tr key={id}>
                            <td className={"position"}>{position}</td>
                            <td>{name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </GameCard>
    );
};

export default Roster;
