import GameCard from "@src/components/game/GameCard";
import { Team } from "@src/util/types";
import { Matchup } from "@src/util/type/Matchup";
import { formatRosterData } from "@src/util/formatRoster";

type Props = {
    team: Team;
    matchup: Matchup;
};

const Roster = ({ team, matchup }: Props) => {
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
