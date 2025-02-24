import { useState } from "react";
import NavItem from "../navList";

const SortableNavBar = ({
  initialItems,
  level = 0,
  path = "nav",
  child,
  openEdit,
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
          child={child}
          openEdit={openEdit}
        />
      ))}
    </ul>
  );
};
export default SortableNavBar;
