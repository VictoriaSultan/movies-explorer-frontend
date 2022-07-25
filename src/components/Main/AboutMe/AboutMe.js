import React from "react";
import Avatar from "../../../images/avatar.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  const currentDate = new Date();
  return (
    <section id="about_me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <p className="about-me__name">Виктория</p>
          <p className="about-me__profession">Фронтенд-разработчик, {currentDate.getFullYear() - 1989} года</p>
          <p className="about-me__description">
         Я живу в Калининграде. Здесь длинный текст с коротким, но интересным рассказом про меня. Его я обязательно допишу к сдаче диплома.
          </p>
          <ul className="about-me__links">
            <li>
              <a href="https://github.com/VictoriaSultan" className="about-me__link" target="_blank" rel="noreferrer">Telegram</a>
            </li>
            <li>
              <a href="https://github.com/VictoriaSultan" className="about-me__link" target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
        <img src={Avatar} alt="Фотография создателя." className="about-me__avatar"/>
        </div>
    </section>
  );
}

export default AboutMe;
