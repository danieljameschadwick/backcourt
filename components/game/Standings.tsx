import GameCard from "@src/components/game/GameCard";
import { Division } from "@src/util/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getDivision = async (divisionId: string, callback: Dispatch<SetStateAction<Division>>) => {
    const divisionResponse = await fetch(`${process.env.API}/division/${divisionId}`);
    const division = await divisionResponse.json();

    callback(division);
};

type Props = {
    divisionId: string;
}

const Standings = ({ divisionId }: Props) => {
    const [ division, setDivision ] = useState<Division | null>(null);

    useEffect(() => {
        if (!division) {
            getDivision(divisionId, setDivision);
        }
    }, [ divisionId ]);

    if (!division) {
        return (<></>); // @TODO: handle undefined Division, very minor chance of happening
    }

    const { name, teams } = division;

    return (
        <GameCard title={name} additionalClasses={"table--card standings--card"}>
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
                    {teams
                        .sort((
                            { record: { homeRecord: aHomeRecord, awayRecord: aAwayRecord }},
                            { record: { homeRecord: bHomeRecord, awayRecord: bAwayRecord }}
                        ) => {
                            if (aHomeRecord === bHomeRecord) {
                                return aAwayRecord - bAwayRecord;
                            }

                            return bHomeRecord - aHomeRecord;
                        })
                        .map(({ id, name, record: { homeRecord, awayRecord } }) => {
                            return (
                                <tr key={id}>
                                    <td className={"name"}>
                                        <img height={15} alt={""} src={"/image/player/avatar.png"} />
                                        {name}
                                    </td>
                                    <td>{homeRecord}</td>
                                    <td>{awayRecord}</td>
                                    <td>-</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </GameCard>
    );
};

export default Standings;
