import { openPopup } from './index.js'

/* ---------------------- Просмотр карточки ----------------------*/
const popupViewCard = document.querySelector('.popup_type_view-card');
const viewCardPhoto = popupViewCard.querySelector('.popup__view-card-photo');
const viewCardCaption = popupViewCard.querySelector('.popup__view-card-caption');

class Card {
	constructor(name, link, template) {
		this._name = name;
		this._link = link;
    this._template = template;
	}

	_getElement() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  /* ---------------------- Функция: просмотреть карточку----------------------*/
  _viewCard() {
    viewCardCaption.textContent = this._name;
    viewCardPhoto.src = this._link;
    viewCardPhoto.alt = this._name;
    openPopup(popupViewCard);
  }

/* ---------------------- Функция: удалить карточку----------------------*/
  _deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

/* ---------------------- Функция: поставить лайк ----------------------*/
  _likeCard(evt) {
    evt.target.classList.toggle('element__button-like_active');
  }

  _setEventListeners() {
		this._element.querySelector('.element__image').addEventListener('click', () => {
			this._viewCard();
	  });
    this._element.querySelector('.element__button-delete').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__button-like').addEventListener('click', this._likeCard);
  }

  generateCard() {
    this._element = this._getElement();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__image').src = this._link;

    return this._element;
  }
}

export default Card
