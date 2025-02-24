import React from "react";
import { CancelIcon } from "../../../../public/assets/icons/cancel";
import { ConfirmlIcon } from "../../../../public/assets/icons/confirm";
import { MenuIcon } from "../../../../public/assets/icons/menu";
import { BackButton } from "../../../../public/assets/icons/back";
import NavDNDContainer from "../dndNav";
import SortableNavBar from "../sortableNavBar";
import { menuArr } from "../navBar";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [saveEdit, setSaveEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleSaveEdit = () => setSaveEdit(true);
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
    <div
      className={`fixed top-0 right-0 bg-gray-100 w-full h-full z-20 transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="px-6 py-8 flex justify-between items-center">
        <div className="">
          <button className="flex items-center gap-3" onClick={toggleSidebar}>
            <BackButton />
            <h1 className="text-lg font-semibold">Menu</h1>
          </button>
        </div>
        {openEdit ? (
          <>
            <div className="flex gap-4 items-center">
              <CancelIcon cursor={"pointer"} onClick={handleCloseEdit} />
              <ConfirmlIcon cursor={"pointer"} onClick={handleCloseEdit} />
            </div>
          </>
        ) : (
          <MenuIcon onClick={handleOpenEdit} cursor={"pointer"} />
        )}
      </div>
      <NavDNDContainer>
        <SortableNavBar
          initialItems={menu}
          openEdit={openEdit}
          handleCloseEdit={handleCloseEdit}
        />
      </NavDNDContainer>
    </div>
  );
};
export default Sidebar;
