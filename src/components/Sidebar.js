import React, { useEffect } from "react";
import UseAnimations from "react-useanimations";
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";
import SidebarContainer from "./SidebarContainer";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar(props) {
  const { imgStatus, setImgStatus, scrollDirection, setScrollDirection } =
    props;

  useEffect(() => {}, [scrollDirection]);

  return (
    <div>
      <div className="sidebar">
        <SidebarMenu />
        <SidebarContainer
          setImgStatus={setImgStatus}
          imgStatus={imgStatus}
          scrollDirection={scrollDirection}
          setScrollDirection={setScrollDirection}
        />
        <div>
          {scrollDirection === "arrowDown" ? <DownArrow /> : <UpArrow />}
        </div>
      </div>
    </div>
  );
}
