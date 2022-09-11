import React from "react";
import Logo from "../Logo/Logo"; 
import NavAuth from "../NavAuth/NavAuth";
import Navigation from "../Navigation/Navigation";
import "./Header.css"

const Header = (props) => {
  const {loggedIn} = props;
  return (
    <header className={`header ${!loggedIn ? "header_type_auth" : ""}`}>
        <Logo />
        {loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
};

export default Header;
