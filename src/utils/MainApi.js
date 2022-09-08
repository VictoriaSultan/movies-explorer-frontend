import { optionsApi } from "./Constants";

class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._checkResponse = this._checkResponse.bind(this);
    }

    get _headers() {
        return {
            authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(this._baseUrl + "/users/me", {
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(this._baseUrl + "/movies", {
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    setUserInfo(dataProfile) {
        return fetch(this._baseUrl + "/users/me", {
                method: "PATCH",
                headers: {
                    authorization: this._headers.authorization,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: dataProfile.name,
                    about: dataProfile.about,
                }),
            })
            .then(this._checkResponse)
    }

    addCard(dataCard) {
        return fetch(this._baseUrl + "/movies", {
                method: "POST",
                headers: {
                    authorization: this._headers.authorization,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: dataCard.name,
                    link: dataCard.link,
                }),
            })
            .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(this._baseUrl + "/movies/" + cardId, {
                method: "DELETE",
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

}

const api = new Api(optionsApi);

export {
    api
};