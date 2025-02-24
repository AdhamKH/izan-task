"use client";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { menuArr } from "../navBar";
import { DNDIcon } from "../../../../public/assets/icons/iconDND";

// Individual nav item component
const NavItem = ({
  id,
  text,
  index,
  moveItem,
  level,
  item,
  path,
  parentId,
  child,
  toggleMenu,
  openEdit,
}: any) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: `item-${level}`,
      item: { id: item?.id, index, level, parentId },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [item, index, level, parentId]
  );

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: `item-${level}`,
      canDrop: (item: any) => item.parentId === parentId,
      hover(item, monitor) {
        if (!monitor.canDrop()) return;
        if (
          item.index !== index &&
          item.level === level &&
          item.parentId === parentId
        ) {
          moveItem(item.index, index);
          item.index = index;
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [index, level, parentId]
  );
  let backgroundColor = "white";
  if (isOver && canDrop) {
    backgroundColor = "lightgreen";
  } else if (isOver && !canDrop) {
    backgroundColor = "lightcoral";
  }

  return (
    <li
      className=" rounded text-[24px] text-[#404040] font-medium py-2 mx-2"
      ref={(node: HTMLLIElement | null) => {
        if (node) {
          drag(drop(node));
        }
      }}
    >
      <div
        className={`flex items-center justify-between ${
          !child && "bg-[#F7F7F7]"
        } `}
      >
        <button
          className="w-full text-left py-2 px-6 hover:bg-gray-50 flex justify-between items-center"
          onClick={() => toggleMenu(item.id)}
        >
          <p className="flex items-center gap-[6px]">
            {openEdit && <DNDIcon />} {item.title}
          </p>
          {item.children?.length > 0 && <span>&gt;</span>}
        </button>
      </div>

      {item.open && (
        <ul>
          <SortableNavBar
            initialItems={item.children}
            level={level + 1}
            parentId={item?.id}
            child={true}
            openChild={true}
            path={`${path}-${item.id}`}
          />
        </ul>
      )}
    </li>
    // <div
    //   ref={(node: HTMLDivElement | null) => {
    //     if (node) {
    //       drag(drop(node));
    //     }
    //   }}
    //   style={{ padding: "5px", border: "1px solid gray", marginBottom: "5px" }}
    //   className="flex flex-col gap-[5rem]"
    // >
    //   {item.title}
    //   {item.children && (
    //     <div className="bg-red-100">
    //       <SortableNavBar
    //         initialItems={item.children}
    //         level={level + 1}
    //         path={`${path}-${item.id}`}
    //         parentId={item.id}
    //       />
    //     </div>
    //   )}
    // </div>
  );
};

// Main navbar component
const SortableNavBar = ({
  initialItems,
  level = 0,
  path = "nav",
  parentId = null,
}: any) => {
  const [items, setItems] = useState(initialItems);

  const moveItem = (from: any, to: any) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(from, 1);
    updatedItems.splice(to, 0, movedItem);
    setItems(updatedItems);
  };
  const toggleMenu = (id: number) => {
    setItems(
      items.map((item: any) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };
  return (
    <ul>
      {items?.map((item: any, index: any) => (
        <NavItem
          key={`${path}-${item?.id}`}
          item={item}
          index={index}
          moveItem={moveItem}
          level={level}
          path={path}
          toggleMenu={toggleMenu}
        />
      ))}
    </ul>
  );
};

const Test = () => {
  const [menu] = React.useState(
    menuArr.map((item) => ({
      ...item,
      open: false,
      type: item?.children ? "group" : "field",
      children: item.children
        ? item.children.map((child) => ({ ...child, type: "field" }))
        : [],
    }))
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <SortableNavBar initialItems={menu} />
    </DndProvider>
  );
};

export default Test;
