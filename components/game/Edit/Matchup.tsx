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

export const MatchupRow = ({ name, index }) => {
    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
    } = useSortable({ id: name });

    return (
        <tr
            ref={setNodeRef}
            faded={isDragging}
            {...attributes}
            {...listeners}
        >
            <td>
                -
            </td>
            <td>
                {name}
            </td>
        </tr>
    );
};


const Matchup = ({ team, matchup }) => {
    const { pointGuard, shootingGuard, smallForward, powerForward, center } = matchup;
    const [items, setItems] = useState([
        "Daniel Chadwick",
        "Zach LaVine",
        "DeMar Derozan",
        "Patrick Williams",
        "Nikola Vučević",
        "Alex Caruso",
    ]);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <GameCard title={"Matchup"} additionalClasses={"table--card"}>
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
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((name, index) => (
                                <MatchupRow key={name} name={name} index={index} />
                            ))}
                        </tbody>
                    </table>
                </SortableContext>
            </DndContext>
        </GameCard>
    );
};

export default Matchup;
