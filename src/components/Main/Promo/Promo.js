import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

const Promo = () => (
  <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки
        </h1>
        <NavTab />
      </div>
      
  </section>
);

export default Promo;