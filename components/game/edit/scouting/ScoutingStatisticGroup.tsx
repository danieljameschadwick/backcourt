import { Player } from "@src/util/type/Player";
import { formatName } from "@src/util/playerFormatter";

type Props = {
    label: string;
    player: object; // @TODO: pass player object
    children: React.ReactNode;
};

const ScoutingStatisticGroup = ({ label, player, children }: Props) => {
    return (
        <div>
            <h5>{label}</h5>

            <span>{formatName(player)}</span>

            {children}
        </div>
    );
};

export default ScoutingStatisticGroup;
