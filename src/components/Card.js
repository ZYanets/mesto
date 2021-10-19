export default class Card {
	constructor(data, template, { handleCardClick }) {
		this._data = data;
    this._template = template;
    this._handleCardClick = handleCardClick;
	}

	_getElement() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  /* ---------------------- Функция: удалить карточку----------------------*/
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

/* ---------------------- Функция: поставить лайк ----------------------*/
  _likeCard(evt) {
    evt.target.classList.toggle('element__button-like_active');
  }

  _setEventListeners() {
		this._element.querySelector('.element__image').addEventListener('click', () => {
			this._handleCardClick(this._data);
	  });
    this._element.querySelector('.element__button-delete').addEventListener('click', () => {this._deleteCard()});
    this._element.querySelector('.element__button-like').addEventListener('click', this._likeCard);
  }

  generateCard() {
    this._element = this._getElement();
    this._setEventListeners();
    const elementImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._data.name;
    elementImage.alt = this._data.name;
    elementImage.src = this._data.link;

    return this._element;
  }
}
