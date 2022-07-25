import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import savedMovies from '../../utils/SavedMovies';
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList
        cards={savedMovies}
        buttonMore={false} />
    </div>
  );
};

export default SavedMovies;