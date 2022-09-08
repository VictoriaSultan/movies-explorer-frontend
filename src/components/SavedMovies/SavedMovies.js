import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import savedMovies from '../../utils/SavedMovies';
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList
        cards={savedMovies} />
    </section>
  );
};

export default SavedMovies;