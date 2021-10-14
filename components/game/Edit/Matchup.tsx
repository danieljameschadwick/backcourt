import { useState } from "react";
import GameCard from "@src/components/game/GameCard";

import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { IndexedMatchupPositions } from "@src/util/enum/indexedMatchupPositions";
import { Fitness, FitnessToFriendly } from "@src/util/enum/Fitness";

type Props = {
    player: any;
    index: number;
};

export const MatchupRow = ({ player, index }: Props) => {
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
        <tr
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            <td className={"position"}>
                {matchupPosition}
            </td>
            <td>
                <span className={"player--name"}>{name}</span>, <span className={"player--position"}>{position}</span>
            </td>
            <td className={"fitness"}>
                { fitness === Fitness.OUT ? (
                    <span className={"text--out"}>{FitnessToFriendly[fitness]}</span>
                ) : ''}
            </td>
        </tr>
    );
};

const Matchup = ({ team, matchup }) => {
    const { pointGuard, shootingGuard, smallForward, powerForward, center } = matchup;
    const [ items, setItems ] = useState<any[]>([
        { id: "0", matchupPosition: "PG", name: "Daniel Chadwick", position: "PG", fitness: Fitness.READY },
        { id: "1", matchupPosition: "SG", name: "Zach LaVine", position: "SG", fitness: Fitness.READY },
        { id: "2", matchupPosition: "SF", name: "DeMar Derozan", position: "SF", fitness: Fitness.READY },
        { id: "3", matchupPosition: "PF", name: "Patrick Williams", position: "PF", fitness: Fitness.READY },
        { id: "4", matchupPosition: "C", name: "Nikola Vucevic", position: "C", fitness: Fitness.READY },
        { id: "5", matchupPosition: "6", name: "Alex Caruso", position: "PG", fitness: Fitness.OUT },
    ]);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = active.data.current.sortable.index;
                const newIndex = over.data.current.sortable.index;
                const sortedPlayers = arrayMove(items, oldIndex, newIndex);

                const positionedPlayers = [];

                for (const [index, player] of sortedPlayers.entries()) {
                    positionedPlayers.push({
                        ...player,
                        matchupPosition: IndexedMatchupPositions[index],
                    });
                }

                return positionedPlayers;
            });
        }
    };

    const hasModified = true; // @TODO: only move if matchup has changed
    const controls = hasModified ? (
        <>
            <button type={"submit"}>
                Save
            </button>
        </>
    ) : "";

    return (
        <GameCard title={"Matchup"} additionalClasses={"table--card"} controls={controls}>
            <DndContext
                autoScroll={false}
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    <table className={"table table--matchup"}>
                        <thead>
                        <tr>
                            <th className={"position"}>Pos.</th>
                            <th>Name</th>
                            <th className={"fitness"}></th>
                        </tr>
                        </thead>
                        <tbody>
                            {items.map((player, index) => (
                                <MatchupRow key={player.id} player={player} index={index} />
                            ))}
                        </tbody>
                    </table>
                </SortableContext>
            </DndContext>
        </GameCard>
    );
};

export default Matchup;
