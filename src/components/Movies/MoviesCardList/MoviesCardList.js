import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ cards }) => {
  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card) => {
          return <MoviesCard key={card.id} card={card} />
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;