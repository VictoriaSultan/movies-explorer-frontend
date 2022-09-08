import React, {useState} from 'react';
import SearchForm from './SearchForm/SearchForm';
import NotFound from './NotFound/NotFound';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import useCurrentWidth from '../../hooks/useCurrentWidth';
import {getLoadStep, getInitialCount} from '../../utils/getLoadStep';

import './Movies.css';

function Movies({data, onChangeFilters}) {

  const width = useCurrentWidth();

  const handleLoadMore = () => {
    setVisibleMoviesCount((prevCount)=>{
      return prevCount + getLoadStep(width);
    })
  };

  const [visibleMoviesCount, setVisibleMoviesCount] = useState(getInitialCount(width));

  return (
    <section className="movies">
      <SearchForm  onChangeFilters={onChangeFilters}/>
      {
        (data.length > 0) ?
        <div>
          <MoviesCardList
            cards={data.slice(0,visibleMoviesCount)} />
            {
              (visibleMoviesCount < data.length) &&
              <div className="cards__button-container">
                <button className="cards__button" type="button" name="more" onClick={handleLoadMore}>Ещё</button>
              </div>
            }
        </div> :
        <NotFound />
      }
    </section>
  );
}

export default Movies;