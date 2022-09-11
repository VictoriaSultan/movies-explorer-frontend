import React from "react";
import "./NavTab.css";

const NavTab = () => (
  <nav className="nav-tab">
    <a href="#about_project" className="nav-tab__nav-link" aria-label="О проекте">О проекте</a>
    <a href="#techs" className="nav-tab__nav-link" aria-label="Технологии">Технологии</a>
    <a href="#about_me" className="nav-tab__nav-link" aria-label="Студент">Студент</a>
  </nav>
);

export default NavTab;