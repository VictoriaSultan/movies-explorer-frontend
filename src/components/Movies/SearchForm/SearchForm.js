import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input className="search__input" type="text" name="search" placeholder="Фильм" required />
          <button className="search__button" type="submit"></button>
        </form>
        <div className="search__toggle">
          <p className="search__films">Короткометражки</p>
          <label className="search__tumbler">
            <input type="checkbox" className="search__checkbox" />
            <span className="search__slider" />
          </label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;