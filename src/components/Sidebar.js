import React, { useEffect } from "react";
import UseAnimations from "react-useanimations";
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";
import SidebarContainer from "./SidebarContainer";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar(props) {
  const {
    imgStatus,
    screenSize,
    scrollDirection,
    setImgStatus,
    setScrollDirection,
  } = props;

  useEffect(() => {}, [scrollDirection]);

  return (
    <div>
      <div className="sidebar">
        <SidebarMenu />
        <SidebarContainer
          setImgStatus={setImgStatus}
          imgStatus={imgStatus}
          screenSize={screenSize}
          setScrollDirection={setScrollDirection}
        />
        <div className="scroll-arrow">
          {scrollDirection === "arrowDown" ? <DownArrow /> : <UpArrow />}
        </div>
      </div>
    </div>
  );
}
