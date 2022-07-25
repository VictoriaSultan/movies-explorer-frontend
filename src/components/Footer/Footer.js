import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__row">
        <p className="footer__date">© {(new Date()).getFullYear()}</p>
        <ul className="footer__links">
          <li><a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/VictoriaSultan" className="footer__link">Github</a></li>
          <li><a href="https://github.com/VictoriaSultan" className="footer__link">Telegram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
