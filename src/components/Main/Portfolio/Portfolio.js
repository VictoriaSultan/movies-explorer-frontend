import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/VictoriaSultan/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__name">Статичный сайт</p>
            <div className="portfolio__icon">↗</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://victoriasultan.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <p className="portfolio__name">Адаптивный сайт</p>
            <div className="portfolio__icon">↗</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://mesto.gramr.ru" target="_blank" rel="noreferrer">
            <p className="portfolio__name">Одностраничное приложение</p>
            <div className="portfolio__icon">↗</div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
