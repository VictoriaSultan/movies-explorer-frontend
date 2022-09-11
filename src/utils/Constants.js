const optionsApi = {
  baseUrl: "https://api.movies.gramr.ru",
};

const optionsMoviesApi = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
};

const pagesConfig = {
  partsInclude: ["/", "/movies", "/saved-movies", "/profile"],
};

const SHORT_MOVIE_MINUTES = 40;

export { optionsApi, optionsMoviesApi, pagesConfig, SHORT_MOVIE_MINUTES };
