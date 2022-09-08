const optionsApi = {
    baseUrl: "https://api.movies.gramr.ru",
};

const pagesConfig = {
    headerInclude: [
        "/",
        "/movies",
        "/saved-movies",
        "/profile"
    ],
    footerInclude: 
        [
            "/",
            "/movies",
            "/saved-movies",
            "/profile"
        ]
    
}

const SHORT_MOVIE_MINUTES = 40;

export {optionsApi, pagesConfig, SHORT_MOVIE_MINUTES};