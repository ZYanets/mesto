import Popup from './Popup.js';
export default class PopupWithDelete extends Popup {
  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitButtonText = this._submitButton.textContent;
    this._form = this._popup.querySelector('.popup__form');
  }

  open(data) {
    this._data = data;
    super.open()
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._data);
      this.close();
      }
    )
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}
