import GameCard from "@src/components/game/GameCard";

type Props = {
}

const Standings = () => {
    return (
        <GameCard title={`League II NFC East Standings`} additionalClasses={"table--card"}>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>PCT.</th>
                        <th>PF</th>
                        <th>PA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chicago Bulls</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Detroit Pistons</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Indiana Pacers</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cleveland Cavaliers</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Milwaukee Bucks</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </GameCard>
    );
};

export default Standings;
