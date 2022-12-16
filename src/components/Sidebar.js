import React from "react";
import SidebarContainer from "./SidebarContainer";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <SidebarMenu />
        <SidebarContainer />
      </div>
    </div>
  );
}
