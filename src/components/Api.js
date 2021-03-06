export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }


  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getCardList()])
  }

  /* ---------------------- Загрузка необходимой информации с сервера ----------------------*/
  _getInfo() {
    return (res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  /* ---------------------- Получение карточек с сервера ----------------------*/
  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._getInfo());
  }

  /* ---------------------- Получение данных пользователя на сервер ----------------------*/
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._getInfo());
  }

  /* ---------------------- Отправка данных пользователя на сервер ----------------------*/
  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._getInfo());
  }

  /* ---------------------- Добавление карточки на сервер ----------------------*/
  addCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
      .then(this._getInfo());
  }

  /* ---------------------- Удаление карточки из сервера ----------------------*/
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._getInfo());
  }

  /* ---------------------- Постановка и снятие лайка ----------------------*/
  addLike(cardData) {
    return fetch(`${this._baseUrl}/cards/likes/${cardData._id}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._getInfo());
  }

  deleteLike(cardData) {
    return fetch(`${this._baseUrl}/cards/likes/${cardData._id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._getInfo());
  }

  /* ---------------------- Обновление аватара пользователя ----------------------*/
  changeAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
      .then(this._getInfo());
  }
}





