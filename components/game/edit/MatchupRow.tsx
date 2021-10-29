import { useSortable } from "@dnd-kit/sortable";
import { Fitness, FitnessToFriendly } from "@src/util/enum/Fitness";
import { ShortPosition } from "@src/util/enum/Position";

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
        isDragging,
    } = useSortable({ id: id });

    return (
        <tr className={`matchup-row ${isDragging ? 'faded' : ''}`}>
            <td
                className={"draggable"}
                ref={setNodeRef}
                {...listeners}
                {...attributes}
            />
            <td className={"position"}>
                {matchupPosition}
            </td>
            <td className={"name"}>
                <span className={"player--name"}>{name}</span>, <span className={"player--position"}>{ShortPosition[position]}</span>
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
