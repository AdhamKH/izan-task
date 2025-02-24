"use client";
import React, { useCallback, useRef, useState } from "react";
import { useDrag, useDragLayer, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
type Props = {
  children?: React.ReactNode;
};
const ListItem = ({ text, index, moveListItem }: any) => {
  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const ref: any = useRef(null);

  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: "item",
    hover: (item: any, monitor: any) => {
      const dragIndex = item.index;
      const hoverIndex: any = index;
      const hoverBoundingRect: any = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // Join the 2 refs together into one (both draggable and can be dropped on)
  const dragDropRef: any = dragRef(dropRef(ref));

  // Make items being dragged transparent, so it's easier to see where we drop them
  const opacity = isDragging ? 0 : 1;
  const style = {
    padding: "8px",
    margin: "4px",
    backgroundColor: "white",
    border: "1px solid gray",
    cursor: "move",
  };

  return (
    <div ref={dragDropRef} style={{ ...style, opacity }}>
      {text}
    </div>
  );
};

const DND = (props: Props) => {
  const PETS = [
    { id: 1, name: "dog" },
    { id: 2, name: "cat" },
    { id: 3, name: "fish" },
    { id: 4, name: "hamster" },
  ];
  const [pets, setPets] = useState(PETS);
  const movePetListItem = useCallback(
    (dragIndex: any, hoverIndex: any) => {
      const dragItem = pets[dragIndex];
      const hoverItem = pets[hoverIndex];
      // Swap places of dragItem and hoverItem in the pets array
      setPets((pets) => {
        const updatedPets = [...pets];
        updatedPets[dragIndex] = hoverItem;
        updatedPets[hoverIndex] = dragItem;
        return updatedPets;
      });
    },
    [pets]
  );
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {pets.map((pet, index) => (
          <ListItem
            key={pet.id}
            index={index}
            text={pet.name}
            moveListItem={movePetListItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DND;
