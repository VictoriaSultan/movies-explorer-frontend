import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';

import Header from "../Header/Header";
import Main from '../Main/Main';
import Error from '../Error/Error';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <Switch>
      <Route exact path="/">
          <Header loggedIn={false} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header loggedIn={true} />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header loggedIn={true} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Header loggedIn={true} />
          <Profile />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
        
    </div>
  );
}

export default App;