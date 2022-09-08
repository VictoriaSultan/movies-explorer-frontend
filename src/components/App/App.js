import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import { CurrentUserProvider } from "../../contexts/CurrentUser";
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
import moviesApi from "../../utils/MoviesApi";

function App() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLoading, setLoading] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filters, setFilters] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const localMovies = localStorage.getItem("movies");
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
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      checkToken()
        .then((userData) => {
          // setCurrentUser(userData);
          // console.log(userData);
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  }, [isLoggedIn]);

  const getFilteredMovies = (movies, { text = "", shortFilms = false }) => {
    return movies.filter((item) => {
      if (shortFilms && item.duration > SHORT_MOVIE_MINUTES) {
        return false;
      }
      for (let key in item) {
        if (
          item.hasOwnProperty(key) &&
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(text.toLowerCase())
        ) {
          return true;
        }
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

  const fetchMovies = () => {
    moviesApi.getMovies().then((res) => {
      localStorage.setItem("movies", JSON.stringify(res));
    });
  };

  const handleChangeProfile = (name, email)=>{
  }

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
          .catch((error) => {
          });
      }
    });
  };

  const handleOnLogin = (email, password) => {
    return authorize(email, password).then((data) => {
      if (data) {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
      }
    });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <div className="page">
      {pagesConfig.headerInclude.includes(pathname) ? (
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
          onChangeFilters={handleChangeFilters}
          data={movies}
        />
        <ProtectedRoute
          exact
          path="/saved-movies"
          loggedIn={isLoggedIn}
          component={SavedMovies}
          onChangeFilters={handleChangeFilters}
          data={movies}
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
      {pagesConfig.footerInclude.includes(pathname) ? <Footer /> : null}
    </div>
  );
}

export default App;
