import React from "react";
import SidebarContainer from "./SidebarContainer";
import SidebarMenu from "./SidebarMenu";
import ImageContainer from "./ImageContainer";

export default function Sidebar(props) {
const {imgStatus, setImgStatus } = props

  return (
    <div>
      <div className="sidebar">
        <SidebarMenu />
        <SidebarContainer setImgStatus={setImgStatus} imgStatus={imgStatus}/>
      </div>
    </div>
  );
}
