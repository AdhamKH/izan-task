import { DNDIcon } from "../../../../public/assets/icons/iconDND";
import { RightArrowIcon } from "../../../../public/assets/icons/rightArrow";
import SortableNavBar from "../sortableNavBar";
import { DndProvider, useDrag, useDrop } from "react-dnd";

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
      // canDrag: () => openEdit,
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
          {item.children?.length > 0 && (
            <span>
              {item.open ? (
                <RightArrowIcon className="-rotate-90" />
              ) : (
                <RightArrowIcon className="rotate-90" />
              )}
            </span>
          )}
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
            openEdit={openEdit}
          />
        </ul>
      )}
    </li>
  );
};
export default NavItem;
