import React, { useState} from 'react';
import "./SearchForm.css";

function SearchForm({onChangeFilters}) {

  const [searchText, setSearchText] = useState("");

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
    onChangeFilters({
      key: e.target.name,
      value: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input className="search__input" type="text" name="search" placeholder="Фильм" required onChange={handleChangeSearchText}/>
          <button className="search__button" type="submit" onClick={handleSubmit}></button>
        </form>
        <div className="search__toggle">
          <p className="search__films">Короткометражки</p>
          <label className="search__tumbler">
            <input type="checkbox" className="search__checkbox" name="shortFilms" onChange={handleChangeFilter} />
            <span className="search__slider" />
          </label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
