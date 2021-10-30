import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__view-card-photo');
    this._name = this._popup.querySelector('.popup__view-card-caption');
  }
/* ---------------------- Функция: открыть изображение ----------------------*/
  open({ name, link } ) {
    this._name.textContent = name;
    this._image.alt = name;
		this._image.src = link;
    super.open();
  }
}
