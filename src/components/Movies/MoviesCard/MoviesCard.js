import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({
  card,
  onSaveMovieCard,
  onDeleteMovieCard,
  getSavedMovieStatus,
}) => {
  const [favorite, setFavorite] = useState(getSavedMovieStatus(card.id));

  const handleAddCard = (card) => {
    onSaveMovieCard({
      movieId: card.id,
      nameRU: card.nameRU || " ",
      nameEN: card.nameEN || " ",
      duration: card.duration,
      director: card.director || " ",
      country: card.country || " ",
      year: card.year || " ",
      description: card.description || " ",
      trailerLink: card.trailerLink || "https://ya.ru",
      image: "https://api.nomoreparties.co" + card.image.url,
      thumbnail:
        "https://api.nomoreparties.co" + card.image.formats.thumbnail.url,
    })
      .then((data) => {
        setFavorite(true);
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  const handleDeleteCard = (cardId) => {
    onDeleteMovieCard(cardId)
      .then((data) => {
        // console.log("onDeleteMovieCard", data);
        setFavorite(false);
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  const { pathname } = useLocation();

  return (
    <div className="card">
      <div className="card__element">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="card__image"
            src={
              card.id
                ? "https://api.nomoreparties.co" + card.image.url
                : card.image
            }
            alt={card.nameRU}
          ></img>
        </a>
        <div className="card__container">
          <h2 className="card__title">{card.nameRU}</h2>
          <div className="card__like">
            {pathname === "/saved-movies" ? (
              <button
                type="button"
                className="card__like_delete"
                onClick={() => {
                  handleDeleteCard(card.id ? card.id : card.movieId);
                }}
              />
            ) : (
              <button
                type="button"
                className={`card__like card__like${
                  favorite ? "_active" : "_inactive"
                }`}
                onClick={() => {
                  if (favorite) {
                    handleDeleteCard(card.id ? card.id : card.movieId);
                  } else {
                    handleAddCard(card);
                  }
                }}
              />
            )}
          </div>
        </div>
        <p className="card__time">
          {hours}ч {minutes}м
        </p>
      </div>
    </div>
  );
};

export default MoviesCard;
