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
        <GameCard title={`${team.name} Roster`}>
            <ul>
                <li>PG: {pointGuard.firstName} {pointGuard.lastName}</li>
                <li>SG: {shootingGuard.firstName} {shootingGuard.lastName}</li>
                <li>SF: {smallForward.firstName} {smallForward.lastName}</li>
                <li>PF: {powerForward.firstName} {powerForward.lastName}</li>
                <li>C: {center.firstName} {center.lastName}</li>
            </ul>
        </GameCard>
    );
};

export default Roster;
