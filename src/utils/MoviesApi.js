import { optionsMoviesApi } from "./Constants";

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return this._fetcher();
  }

  _fetcher() {
    const headers = this._headers;
    const options = {
      method: "GET",
      headers,
    };
    return fetch(this._baseUrl, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: optionsMoviesApi.baseUrl,
  headers: {
    "Content-type": "aplication/json",
  },
});

export default moviesApi;
