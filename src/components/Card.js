export default class Card {
	constructor(cardData, template, { handleCardClick, addLike, deleteLike, handleDeleteCardClick} , userId) {
		this._card = cardData;
    this._cardLikes = cardData.likes;
    this._cardId = cardData._id;
    this._cardOwnerId = this._card.owner._id;
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._userId = userId;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
    this._handleDeleteCardClick = handleDeleteCardClick;
	}

	_getElement() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  /* ---------------------- Удалить карточку----------------------*/
  removeCard() {
    this._element.remove();
    this._element = null;
  }

  /* ---------------------- Подсчет и отображение количества лайков ----------------------*/
  _isLiked() {
    this._cardLikes.forEach((owner) => {
      if (owner._id === this._userId) {
        this._likeButton.classList.add('element__button-like_active');
      }
    })
   }

  setLikesQuantity(cardData) {
    this._likeCounter.textContent = cardData.likes.length;
  }

  /* ---------------------- Поставить или убрать лайк ----------------------*/
  addLike() {
    this._likeButton.classList.add('element__button-like_active');
  }

  deleteLike() {
    this._likeButton.classList.remove('element__button-like_active');
  }

  /* ---------------------- Установить слушатели ----------------------*/
  _setEventListeners() {
		this._image.addEventListener('click', () => {
			this._handleCardClick(this._card);
	  });
    this._deleteButton.addEventListener('click', this._handleDeleteCardClick);
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__button-like_active')) {
        this._deleteLike(this._card);
      } else {
        this._addLike(this._card);
      };
    })
  }

  /* ---------------------- Сформировать карточку ----------------------*/
  generateCard() {
    this._element = this._getElement();
    this._deleteButton = this._element.querySelector('.element__button-delete');
    this._likeButton = this._element.querySelector('.element__button-like');
    this._likeCounter = this._element.querySelector('.element__like-count');
    this._image = this._element.querySelector('.element__image');
    this._title = this._element.querySelector('.element__title');

    this._setEventListeners();

    this._title.textContent = this._card.name;
    this._image.alt = this._card.name;
    this._image.src = this._card.link;

    if (this._cardOwnerId != this._userId) {
      this._deleteButton.remove();
    }

    this._isLiked()

    this._likeCounter.textContent = this._cardLikes.length;
    return this._element;
  }
}
