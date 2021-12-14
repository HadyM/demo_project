import React, { useState } from "react";
import menuItemData from "../../data/menuData";

import "./Navbar.scss";
import logo from "../../images/HM-logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div
        className={
          active
            ? "navbar__menuItems navbar__menuItems-active"
            : "navbar__menuItems"
        }
      >
        <ul>
          {menuItemData.map((menuItem, key) => {
            return (
              <li key={key}>
                <a href={menuItem.href}>{menuItem.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="navbar__collapsedMenuIcon"
        onClick={() => setActive(!active)}
      >
        =
      </div>
    </div>
  );
};

export default Navbar;
