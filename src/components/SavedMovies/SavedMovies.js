import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import NotFound from "../Movies/NotFound/NotFound";

import "./SavedMovies.css";

const SavedMovies = ({
  dataList,
  onChangeFilters,
  filters,
  onSaveMovieCard,
  onDeleteMovieCard,
  getSavedMovieStatus,
}) => {
  return (
    <section className="saved-movies">
      <SearchForm onChangeFilters={onChangeFilters} filters={{}} />
      {dataList.length > 0 ? (
        <MoviesCardList
          showSavedOnly={true}
          getSavedMovieStatus={getSavedMovieStatus}
          onSaveMovieCard={onSaveMovieCard}
          onDeleteMovieCard={onDeleteMovieCard}
          cards={dataList}
        />
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default SavedMovies;
