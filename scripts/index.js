let profileEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let usernameInput = document.querySelector('.popup__input_type_username');
let username = document.querySelector('.profile__username');
let occupationInput = document.querySelector('.popup__input_type_occupation');
let occupation = document.querySelector('.profile__occupation');
let save = document.querySelector('.popup__button-save');
let formClose = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.popup__form');

function togglePopup () {
  if (!popup.classList.contains('popup_opened')) {
    usernameInput.value = username.textContent;
    occupationInput.value = occupation.textContent;
  }
  popup.classList.toggle('popup_opened')
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    username.textContent = usernameInput.value;
    occupation.textContent = occupationInput.value;
    togglePopup();
}

profileEdit.addEventListener('click', togglePopup);
formClose.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);
