import React from "react";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <div>
      <div className="Nav-bar">
        <span className="Nav-button-name">Peter Rifkind</span>
        <NavButton name="Home" />
        <NavButton name="About" />
        <NavButton name="Github" />
        <NavButton name="Contact" />
      </div>
    </div>
  );
};

export default Nav;
