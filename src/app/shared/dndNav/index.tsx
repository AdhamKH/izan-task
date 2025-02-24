import React, { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NavList from "../navList";

const NavDNDContainer = ({ children }: { children: React.ReactNode }) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};

export default NavDNDContainer;
