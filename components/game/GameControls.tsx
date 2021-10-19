import { useStateValue } from "@src/state/StateProvider";
import { Game } from "@src/util/type/Game";
import { useRouter } from "next/router";

type Props = {
    game: Game;
    isEditing: boolean;
};

const GameControls: React.FC<Props> = ({ game, isEditing = false }: Props) => {
    const [ state, dispatch ] = useStateValue();
    const { user } = state || {};
    const { username = null, team: userTeam = null } = user || {};
    const router = useRouter();

    const { id, homeTeam, awayTeam } = game;
    const canEdit = (userTeam?.id === homeTeam.id) || (userTeam?.id === awayTeam.id);

    const edit = () => {
        router.push(`/games/${id}/edit`);
    };

    const save = () => {
        router.push(`/games/${id}`);
    };

    {/* @TODO: remove hard coded styling controls */}
    return (
        <div className={"game-controls"}>
            {canEdit ? <button disabled={isEditing} onClick={() => edit()}>Edit</button> : ''}
            {isEditing ? <button type={"submit"} onClick={() => save()}>Save</button> : ''}
        </div>
    );
}

export default GameControls;
