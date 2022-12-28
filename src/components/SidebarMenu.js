import React, { useState } from "react";
import Hamburger from "hamburger-react";
import github from "../images/Github.png";
import linkedin from "../images/Linkedin.png";

export default function SidebarMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="sidebar-menu">
      <span>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={30}
          duration={0.6}
          className="sidebar-hamburger"
        />
        {isOpen ? (
          <div>
            <div className="sidebar-menu-item">
              <img src={github} className="social-logo" />
              <a
                href="https://www.github.com/prifkind"
                target="_blank"
                className="social-link"
              >
                Github
              </a>
            </div>
            <div className="sidebar-menu-item">
              <img src={linkedin} className="social-logo" />
              <a
                href="https://www.linkedin.com/in/prifkind"
                target="_blank"
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ) : null}
      </span>
    </div>
  );
}
