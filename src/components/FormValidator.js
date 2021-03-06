export default class FormValidator {
  constructor(config, form) {
    this._formElement = form;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  /* Включение и выключение ошибок */
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  /* Проверка валидности */
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };

  _hasNotInputValues() {
    return this._inputList.every(inputElement => {
      return inputElement.value.length === 0;
    });
  };

  /* Включение и выключение кнопки */
  disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  };

  /* Переключение состояния кнопки */
  _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList) || this._hasNotInputValues(this._inputList)) {
      this.disableSubmitButton(this._buttonElement, this._inactiveButtonClass);
    } else {
      this._enableSubmitButton(this._buttonElement, this._inactiveButtonClass);
    }
  };

  _setEventListeners() {
      this._formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

      this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._toggleButtonState();
  };

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

  }

  enableValidation() {
    this._setEventListeners();
  };
}
