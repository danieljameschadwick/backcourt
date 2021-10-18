import { useSortable } from "@dnd-kit/sortable";
import { Fitness, FitnessToFriendly } from "@src/util/enum/Fitness";

type Props = {
    player: any;
    index: number;
    moveEvent: any;
    isMoving: boolean;
};

export const MatchupRow = ({ player, index, moveEvent, isMoving }: Props) => {
    const {
        id,
        matchupPosition,
        position,
        name,
        fitness,
    } = player;
    const {
        attributes,
        listeners,
        setNodeRef,
    } = useSortable({ id: id });

    return (
        <tr>
            <td
                className={"draggable"}
                ref={setNodeRef}
                {...listeners}
                {...attributes}
            ></td>
            <td className={"position"}>
                {matchupPosition}
            </td>
            <td className={"name"}>
                <span className={"player--name"}>{name}</span>, <span className={"player--position"}>{position}</span>
            </td>
            <td className={"fitness"}>
                {fitness === Fitness.OUT ? (
                    <span className={"text--out"}>{FitnessToFriendly[fitness]}</span>
                ) : ''}
            </td>
            <td className={"action"}>
                <button
                    role={"button"}
                    type={"button"}
                    onClick={() => moveEvent(index)}
                    className={isMoving ? "disabled" : ""}
                    disabled={isMoving}
                >
                    Move
                </button>
            </td>
        </tr>
    );
};
