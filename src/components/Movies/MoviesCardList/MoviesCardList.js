import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({
  cards,
  onSaveMovieCard,
  onDeleteMovieCard,
  getSavedMovieStatus,
  showSavedOnly = false,
}) => {
  const cardsData = showSavedOnly
    ? cards.filter((v) => getSavedMovieStatus(v.id))
    : cards;
  return (
    <section className="cards">
      <ul className="cards__list">
        {cardsData.map((card) => {
          return (
            <MoviesCard
              key={card.id ? card.id : card._id}
              card={card}
              onSaveMovieCard={onSaveMovieCard}
              onDeleteMovieCard={onDeleteMovieCard}
              getSavedMovieStatus={getSavedMovieStatus}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;
