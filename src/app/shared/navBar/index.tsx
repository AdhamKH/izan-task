"use client";
import React from "react";
import { MenuIcon } from "../../../../public/assets/icons/menu";
import Link from "next/link";
import NavDNDContainer from "../dndNav";
import { CancelIcon } from "../../../../public/assets/icons/cancel";
import { ConfirmlIcon } from "../../../../public/assets/icons/confirm";
import SortableNavBar from "../sortableNavBar";

export const menuArr = [
  { id: 1, title: "Dashboard", target: "/" },
  {
    id: 2,
    title: "Job Applications",
    target: "/applications",
    children: [
      { id: 7, title: "John Doe", target: "/applications/john-doe" },
      { id: 10, title: "James Bond", target: "/applications/james-bond" },
      {
        id: 20,
        title: "Scarlett Johansson",
        target: "/applications/scarlett-johansson",
        visible: false,
      },
    ],
  },
  {
    id: 3,
    title: "Companies",
    target: "/companies",
    visible: false,
    children: [
      { id: 8, title: "Tanqeeb", target: "/companies/1" },
      { id: 9, title: "Daftra", target: "/companies/2" },
      { id: 11, title: "TBD", target: "/companies/14" },
    ],
  },
  {
    id: 4,
    title: "Qualifications",
    children: [
      { id: 14, title: "Q1", target: "/q1" },
      { id: 15, title: "Q2", target: "/q2" },
    ],
  },
  { id: 5, title: "About", target: "/about" },
  { id: 6, title: "Contact", target: "/contact" },
];

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [saveEdit, setSaveEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleSaveEdit = () => setSaveEdit(true);
  const handleCanceldit = () => setSaveEdit(false);
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
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex">
      <div className="bg-white w-[35rem] min-h-screen shadow-md hidden xl2:inline">
        <div className="px-6 py-8 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Menu</h1>
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
        <hr />
        <NavDNDContainer>
          <SortableNavBar
            initialItems={menu}
            openEdit={openEdit}
            handleCloseEdit={handleCloseEdit}
          />
        </NavDNDContainer>
      </div>
      <div className="w-full bg-[#E9E9E9] min-h-max pt-[3rem] overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default NavBar;
