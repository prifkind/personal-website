import React from "react";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";
import SidebarContainer from "./SidebarContainer";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar(props) {
  const { imgStatus, setImgStatus } = props;

  return (
    <div>
      <div className="sidebar">
        <SidebarMenu />
        <SidebarContainer setImgStatus={setImgStatus} imgStatus={imgStatus} />
          <UseAnimations
            animation={arrowDown}
            size={56}
            strokeColor={"#FFF"}
            fillColor={"white"}
          />
      </div>
    </div>
  );
}
