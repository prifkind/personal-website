import React, { useState } from "react";
import Hamburger from "hamburger-react";
import github from "../images/Github.png";
import linkedin from "../images/Linkedin.png";

export default function SidebarMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="sidebar-menu">
      <span>
        <Hamburger toggled={isOpen} toggle={setOpen} size={25} duration={0.6} />
        {isOpen ? (
          <div>
            <div>Adventure Awaits</div>
            <div>
              <img src={github} className="social-logo" />
              <a href="https://www.github.com/prifkind" target="_blank" className='social-link'>
                Github
              </a>
            </div>
            <li>Github</li>
          </div>
        ) : null}
      </span>
    </div>
  );
}
