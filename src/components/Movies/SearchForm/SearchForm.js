import React, { useEffect, useState } from "react";
import "./SearchForm.css";

function SearchForm({ onChangeFilters, filters }) {
  const [searchText, setSearchText] = useState(
    filters.hasOwnProperty("text") ? filters.text : ""
  );
  const [shortFilmsCheckbox, setShortFilmsCheckbox] = useState(
    filters.hasOwnProperty("shortFilms") ? filters.shortFilms : false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeFilters({
      key: "text",
      value: searchText,
    });
  };

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setShortFilmsCheckbox(e.target.checked);
    onChangeFilters({
      key: e.target.name,
      value: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input
            className="search__input"
            type="text"
            name="search"
            placeholder="Фильм"
            value={searchText}
            required
            onChange={handleChangeSearchText}
          />
          <button
            className="search__button"
            type="submit"
            onClick={handleSubmit}
          ></button>
        </form>
        <div className="search__toggle">
          <p className="search__films">Короткометражки</p>
          <label className="search__tumbler">
            <input
              type="checkbox"
              className="search__checkbox"
              name="shortFilms"
              checked={shortFilmsCheckbox}
              onChange={handleChangeFilter}
            />
            <span className="search__slider" />
          </label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
