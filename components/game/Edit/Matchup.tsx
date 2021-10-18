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
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { IndexedMatchupPositions } from "@src/util/enum/indexedMatchupPositions";
import { Fitness } from "@src/util/enum/Fitness";
import { MatchupRow } from "@src/components/game/Edit/MatchupRow";

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
    const [ movingPlayer, setMovingPlayer ] = useState<number | null>(null);

    const moveEvent = (id: number) => {
        if (movingPlayer === null) {
            setMovingPlayer(id);

            return;
        }

        if (movingPlayer === id) {
            setMovingPlayer(null);

            return;
        }

        movePlayer(movingPlayer, id);

        /**
         * Once the original player is moved, we need to move the replaced player
         * to the original index (hence id - 1).
         */
        if (movingPlayer < id) {
            movePlayer(id - 1, movingPlayer); // if moving player down, increment
        } else {
            movePlayer(id + 1, movingPlayer); // if moving player up, increment
        }

        setMovingPlayer(null);
    };

    const resetMove = () => {
        setMovingPlayer(null);
    };

    const movePlayer = (index: number, moveToIndex: number) => {
        setItems((items) => {
            const sortedPlayers = arrayMove(items, index, moveToIndex);
            const positionedPlayers = [];

            for (const [ index, player ] of sortedPlayers.entries()) {
                positionedPlayers.push({
                    ...player,
                    matchupPosition: IndexedMatchupPositions[index],
                });
            }

            return positionedPlayers;
        });
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            const oldIndex = active.data.current.sortable.index;
            const newIndex = over.data.current.sortable.index;

            movePlayer(oldIndex, newIndex);
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
                                <th></th>
                                <th className={"position"}>Pos.</th>
                                <th>Name</th>
                                <th className={"fitness"}></th>
                                <th>
                                    {movingPlayer !== null ? (
                                        <button type={"reset"} onClick={() => resetMove()}>
                                            Reset
                                        </button>
                                    ) : ""}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((player, index) => (
                                <MatchupRow
                                    key={player.id}
                                    index={index}
                                    player={player}
                                    moveEvent={moveEvent}
                                    isMoving={index === movingPlayer}
                                />
                            ))}
                        </tbody>
                    </table>
                </SortableContext>
            </DndContext>
        </GameCard>
    );
};

export default Matchup;
