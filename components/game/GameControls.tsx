import { useStateValue } from "@src/state/StateProvider";
import { Game } from "@src/util/type/Game";

type Props = {
    game: Game;
};

const GameControls: React.FC<Props> = ({ game }: Props) => {
    const [ { user: { team: userTeam = null } }, dispatch ] = useStateValue();
    const { homeTeam, awayTeam } = game;
    const canEdit = (userTeam?.id === homeTeam.id) || (userTeam?.id === awayTeam.id);

    {/* @TODO: remove hard coded styling controls */}
    return (
        <div className={"controls"} style={{marginBottom: "1em"}}>
            {canEdit ? <button>Edit</button> : ''}
        </div>
    );
}

export default GameControls;
