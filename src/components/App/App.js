import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { useCurrentUser } from "../../contexts/CurrentUser";
import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Error from "../Error/Error";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

import { SHORT_MOVIE_MINUTES } from "../../utils/Constants";

import Preloader from "../Preloader/Preloader";

import { register, authorize, checkToken } from "../../utils/Auth";
import { pagesConfig } from "../../utils/Constants";
import { api as mainApi } from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
  
  const { pathname } = useLocation();
  const { changeCurrentUser, user } = useCurrentUser();

  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filters, setFilters] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMoviesData, setSavedMoviesData] = useState([]);
  const [favoriteMoviesIndex, setFavoriteMoviesIndex] = useState([]);

  useEffect(() => {
    if (user._id !== "") {
      const favoriteIndexList = savedMoviesData
        .filter((v) => v.owner === user._id)
        .map(({ movieId }) => movieId);
      const unique = favoriteIndexList.filter((v, i, a) => a.indexOf(v) === i);
      setFavoriteMoviesIndex(unique.sort());
    }
  }, [savedMoviesData, movies, user]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const localMovies = localStorage.getItem("movies");
    if (jwt) {
      setLoading(true);
      checkToken()
        .then((userData) => {
          setIsLoggedIn(true);
          changeCurrentUser(userData);
          getSavedMovies();
          setLoading(false);
        })
        .catch((err) => {

        });
    } else {
    }

    if (localMovies) {
      try {
        const parseMovies = JSON.parse(localMovies);
        if (!Array.isArray(parseMovies)) {
          throw new Error("Error");
        }
        setMovies(parseMovies);
      } catch (err) {
        localStorage.removeItem("movies");
        fetchMovies();
      }
    } else {
      fetchMovies();
    }
  }, [changeCurrentUser]);

  useEffect(() => {
    if (movies) {
      setLoading(false);
    }
  }, [movies]);

  const getSavedMovies = () => {
    return mainApi.getInitialCards().then((dataList) => {
      // console.log("getSavedMovies", dataList);
      setSavedMoviesData(dataList);
      return dataList;
    });
  };

  const getSavedMovieStatus = (id) => {
    return favoriteMoviesIndex.includes(id);
  };

  const getFilteredMovies = (movies, { text = "", shortFilms = false }) => {
    return movies.filter((item) => {
      if (shortFilms && item.duration > SHORT_MOVIE_MINUTES) {
        return false;
      }
      if (
        item.hasOwnProperty("nameRU") &&
        typeof item["nameRU"] === "string" &&
        item["nameRU"].toLowerCase().includes(text.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  };

  const handleFilterAllMovies = (filters) => {
    if (localStorage.getItem("movies")) {
      const filteredMovies =
        getFilteredMovies(
          JSON.parse(localStorage.getItem("movies")),
          filters
        ) || [];
      setMovies(filteredMovies);
    }
  };

  const handleChangeFilters = ({ key, value }) => {
    setFilters((prev) => {
      handleFilterAllMovies({ ...prev, [key]: value });
      return { ...prev, [key]: value };
    });
  };

  const handleChangeFilters2 = ({ key, value }) => {
    setFilters((prev) => {
      handleFilterAllMovies({ ...prev, [key]: value });
      return { ...prev, [key]: value };
    });
  };

  const handleSaveMovieCard = (card) => {
    return mainApi.addCard(card).then((data) => {
      getSavedMovies();
      return data;
    });
  };

  const handleDeleteMovieCard = (cardId) => {
    return mainApi.deleteCard(cardId).then((data) => {
      getSavedMovies();
      return data;
    });
  };

  const fetchMovies = () => {
    moviesApi.getMovies().then((res) => {
      localStorage.setItem("movies", JSON.stringify(res));
      setLoading(false);
    });
  };

  const handleChangeProfile = (name, email) => {
    return mainApi.setUserInfo({ name, email }).then((data) => {
      changeCurrentUser(data);
      return data;
    });
  };

  const handleOnRegister = (name, email, password) => {
    return register(name, email, password).then((data) => {
      if (data) {
        return authorize(email, password)
          .then((data) => {
            if (data) {
              localStorage.setItem("jwt", data.token);
              setIsLoggedIn(true);
            }
          })
          .catch((error) => {});
      }
    });
  };

  const handleOnLogin = (email, password) => {
    setLoading(true);
    return authorize(email, password).then((data) => {
      if (data) {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        setLoading(false);
      }
    });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <div className="page">
      {isLoading && <Preloader />}
      {pagesConfig.partsInclude.includes(pathname) ? (
        <Header loggedIn={isLoggedIn} />
      ) : null}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          exact
          path="/movies"
          loggedIn={isLoggedIn}
          component={Movies}
          onSaveMovieCard={handleSaveMovieCard}
          onDeleteMovieCard={handleDeleteMovieCard}
          onChangeFilters={handleChangeFilters}
          filters={filters}
          dataList={movies}
          getSavedMovieStatus={getSavedMovieStatus}
        />
        <ProtectedRoute
          exact
          path="/saved-movies"
          loggedIn={isLoggedIn}
          component={SavedMovies}
          onSaveMovieCard={handleSaveMovieCard}
          onDeleteMovieCard={handleDeleteMovieCard}
          onChangeFilters={handleChangeFilters2}
          filters={filters}
          dataList={movies}
          getSavedMovieStatus={getSavedMovieStatus}
        />
        <ProtectedRoute
          exact
          path="/profile"
          loggedIn={isLoggedIn}
          loggedOut={handleSignOut}
          component={Profile}
          onChangeProfile={handleChangeProfile}
          data={movies}
        />
        <Route exact path="/signup">
          <Register onRegister={handleOnRegister} loggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/signin">
          <Login onLogin={handleOnLogin} loggedIn={isLoggedIn} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      {pagesConfig.partsInclude.includes(pathname) ? <Footer /> : null}
    </div>
  );
}

export default App;
