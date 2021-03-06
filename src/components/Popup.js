export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);

    this._submitButton = this._popup.querySelector('.popup__button');
}
/* ---------------------- Функция: открыть форму ----------------------*/
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

/* ---------------------- Функция: закрыть форму ----------------------*/
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

 /* ---------------------- Функция: закрыть при нажатии на Esc ----------------------*/
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__button-close')) {
        this.close()
      }
    })
  }
}
