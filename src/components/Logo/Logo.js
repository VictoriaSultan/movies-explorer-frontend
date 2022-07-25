import React from "react";
import { Link } from "react-router-dom";
import iconLogo from "../../images/logo.svg";
import "./Logo.css";

const Logo = ({ elementClass }) => {
  return (
    <Link className={`logo ${elementClass}`} to="/">
      <img src={iconLogo} alt="Логотип. Переход к главной странице."/>
    </Link>
  );
}

export default Logo;