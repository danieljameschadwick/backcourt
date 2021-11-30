import { Player } from "@src/util/type/Player";
import { formatName } from "@src/util/playerFormatter";

type Props = {
    label: string;
    player: object; // @TODO: pass player object
    children: React.ReactNode;
};

const ScoutingStatisticGroup = ({ label, player, children }: Props) => {
    return (
        <div className={"statistics-leaders--row"}>
            <h5 className={"statistic-leader--header"}>{label}</h5>

            <div className={"statistic-group--row"}>
                <span className={"statistic-group--player"}>
                    <span className={"statistic-player--name"}>{formatName(player)}</span>, PF
                </span>

                <div className={"statistic-group-items"}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default ScoutingStatisticGroup;
