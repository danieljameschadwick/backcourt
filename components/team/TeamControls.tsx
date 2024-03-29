import { useStateValue } from "@src/state/StateProvider";
import { Team } from "@src/util/type/Team";

type Props = {
    team: Team;
};

const TeamControls: React.FC<Props> = ({ team }: Props) => {
    const [ state, dispatch ] = useStateValue();
    const { user } = state || {};
    const { username = null, team: userTeam = null } = user || {};
    const canEdit = userTeam?.id === team.id;

    {/* @TODO: remove hard coded styling controls */}
    return (
        <div className={"controls"} style={{marginBottom: "1em"}}>
            <button>Show all attributes</button>
            <button>Show all details</button>
            {canEdit ? <button>Edit</button> : ''}
        </div>
    );
}

export default TeamControls;
