import { useState } from "react";
import GameCard from "@src/components/game/GameCard";

import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { IndexedMatchupPositions } from "@src/util/enum/IndexedMatchupPositions";
import { MatchupRow } from "@src/components/game/Edit/MatchupRow";
import { Team } from "@src/util/types";
import { Matchup as MatchupType } from "@src/util/type/Matchup";
import { formatMatchupData, formatMatchupSaveData, MatchupRowType } from "@src/util/formatMatchup";
import { Game } from "@src/util/type/Game";

type Props = {
    game: Game;
    matchup: MatchupType;
    isHome: boolean;
};

const Matchup = ({ game, matchup, isHome }: Props) => {
    const [ items, setItems ] = useState<MatchupRowType[]>(formatMatchupData(matchup));
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

    const handleDragOver = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            const oldIndex = active.data.current.sortable.index;
            const newIndex = over.data.current.sortable.index;

            movePlayer(oldIndex, newIndex);
        }
    };

    const updateMatchup = async () => {
        const saveData = formatMatchupSaveData(items, isHome);
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveData)
        };

        await fetch(`${process.env.API}/game/${game.id}`, requestOptions);
    };

    const hasModified = true; // @TODO: only show save if matchup has changed
    const controls = hasModified ? (
        <>
            <button type={"submit"} onClick={() => updateMatchup()}>
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
                onDragOver={handleDragOver}
            >
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    <table className={"table table--matchup"}>
                        <thead>
                            <tr>
                                <th />
                                <th className={"position"}>Pos.</th>
                                <th>Name</th>
                                <th className={"fitness"} />
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
