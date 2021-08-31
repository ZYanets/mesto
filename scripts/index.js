/* ---------------------- Переменные ----------------------*/

let profileEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let usernameInput = document.querySelector('.popup__input_type_username');
let username = document.querySelector('.profile__username');
let occupationInput = document.querySelector('.popup__input_type_occupation');
let occupation = document.querySelector('.profile__occupation');
let formClose = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.popup__form');

/* ---------------------- Функция: открыть форму ----------------------*/
function openPopup () {
  if (!popup.classList.contains('popup_opened')) {
    usernameInput.value = username.textContent;
    occupationInput.value = occupation.textContent;
  }
  popup.classList.add('popup_opened')
}

/* ---------------------- Функция: закрыть форму ----------------------*/
function closePopup () {
  if (popup.classList.contains('popup_opened')) {
  }
    popup.classList.remove('popup_opened')
}

/* ---------------------- Функция: сохранить введенные данные ----------------------*/
function formSubmitHandler (evt) {
    evt.preventDefault();
    username.textContent = usernameInput.value;
    occupation.textContent = occupationInput.value;
    closePopup();
}

/* ---------------------- Отследить действия ----------------------*/
profileEdit.addEventListener('click', openPopup);
formClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
