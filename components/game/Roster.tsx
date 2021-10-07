import GameCard from "@src/components/game/GameCard";
import { Team } from "@src/util/types";
import { Matchup } from "@src/util/type/Matchup";

type Props = {
    team: Team;
    matchup: Matchup;
}

const Roster = ({ team, matchup }: Props) => {
    const { pointGuard, shootingGuard, smallForward, powerForward, center } = matchup;

    return (
        <GameCard title={`${team.name} Roster`} additionalClasses={"table--card"}>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th className={"position"}>Pos.</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={"position"}>PG</td>
                        <td>{pointGuard.firstName} {pointGuard.lastName}</td>
                    </tr>
                    <tr>
                        <td className={"position"}>SG</td>
                        <td>{shootingGuard.firstName} {shootingGuard.lastName}</td>
                    </tr>
                    <tr>
                        <td className={"position"}>SF</td>
                        <td>{smallForward.firstName} {smallForward.lastName}</td>
                    </tr>
                    <tr>
                        <td className={"position"}>PF</td>
                        <td>{powerForward.firstName} {powerForward.lastName}</td>
                    </tr>
                    <tr>
                        <td className={"position"}>C</td>
                        <td>{center.firstName} {center.lastName}</td>
                    </tr>
                    <tr>
                        <td className={"position"}>6</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={"position"}>7</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={"position"}>8</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={"position"}>9</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={"position"}>10</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={"position"}>11</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className={"position"}>12</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </GameCard>
    );
};

export default Roster;
