import React,{ useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ProfileIcon from "../../images/profile.svg";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [showItems, setShowItems] = useState(false);

  useEffect(()=>{
    setShowItems(false);
  }, [location]);

  const handleToggleMenu = () => setShowItems(!showItems);

  return (
    <nav className="navigation">
      <button className="navigation__btn-menu" type="button" onClick={handleToggleMenu}></button>
      <div className={`navigation__container ${showItems ? "navigation__container_visible" : ""}`}>
        <div className="navigation__sidebar">
          <div className="navigation__list-container">
            <button className="navigation__btn-close" type="button" onClick={handleToggleMenu}></button>
            <ul className="navigation__list">
              <li className="navigation__list-item navigation__list-item_type_main">
                <NavLink to="/" className="navigation__link" activeClassName="navigation__link_active">Главная</NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/profile" className="navigation__link navigation__link_type_profile" activeClassName="navigation__link_active">Аккаунт
          <img src={ProfileIcon} alt="Переход к профилю."/>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;