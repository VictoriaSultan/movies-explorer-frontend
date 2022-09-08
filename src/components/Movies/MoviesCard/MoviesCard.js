import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = (props) => {
    const {card} = props;
    const [favorite, setFavorite] = useState(false);

    function handleFavoriteToogle() {
        setFavorite(!favorite);
    }

    const hours = Math.floor(card.duration / 60);          
    const minutes = card.duration % 60;

    const imageUrl = 'https://api.nomoreparties.co' + card.image.url;

    const { pathname } = useLocation();

    return (
        <div className="card">
            <div className="card__element">
                <a href={card.trailerLink} target="_blank" rel="noreferrer">
                    <img className="card__image" src={imageUrl} alt={card.nameRU}></img>
                </a>
                <div className="card__container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <div className="card__like">
                        {pathname === '/saved-movies' ? (
                        <button type="button" className="card__like_delete" />
                        ) : (
                        <button type="button" className={`card__like card__like${favorite ? '_active' : '_inactive'}`} onClick={handleFavoriteToogle}/>
                        )}
                    </div>
                </div>
                <p className="card__time">{hours}ч {minutes}м</p>
            </div>
        </div>
    )
}

export default MoviesCard;