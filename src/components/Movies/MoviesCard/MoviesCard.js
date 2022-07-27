import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = (props) => {
    const {card} = props;
    const [favorite, setFavorite] = useState(false);

    function handleFavoriteToogle() {
        setFavorite(!favorite);
    }

    const { pathname } = useLocation();

    return (
        <div className="card">
            <div className="card__element">
                <img className="card__image" src={card.image} alt={card.title}></img>
                <div className="card__container">
                    <h2 className="card__title">{card.title}</h2>
                    <div className="card__like">
                        {pathname === '/saved-movies' ? (
                        <button type="button" className="card__like_delete" />
                        ) : (
                        <button type="button" className={`card__like card__like${favorite ? '_active' : '_inactive'}`} onClick={handleFavoriteToogle}/>
                        )}
                    </div>
                </div>
                <p className="card__time">{card.duration}</p>
            </div>
        </div>
    )
}

export default MoviesCard;