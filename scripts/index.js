import Card from './card.js'
import FormValidator from './formValidator.js'
import { initialCards } from './template.js'

/* ---------------------- Попапы ----------------------*/
const popups = document.querySelectorAll('.popup')

/* ---------------------- Блок Профиль ----------------------*/
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const editProfileOpen = document.querySelector('.profile__button-edit');
const editProfileForm = document.querySelector('.popup__form_type_profile');
const usernameInput = document.querySelector('.popup__input_type_username');
const username = document.querySelector('.profile__username');
const occupationInput = document.querySelector('.popup__input_type_occupation');
const occupation = document.querySelector('.profile__occupation');

/* ---------------------- Блок Карточка ----------------------*/
const popupAddCard = document.querySelector('.popup_type_add-card');
const addCardOpen = document.querySelector('.profile__button-add');
const addCardForm = document.querySelector('.popup__form_type_card');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_card-link');

/* ---------------------- Форма карточки ----------------------*/
const elementContainer = document.querySelector('.elements');

/* ---------------------- Объекты настроек для валидации ----------------------*/
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

/* ---------------------- Формы для валидации ----------------------*/
const editProfileValidator = new FormValidator(validationConfig, editProfileForm);
const addCardValidator = new FormValidator(validationConfig, addCardForm);

/* ---------------------- Функция: открыть и закрыть форму ----------------------*/
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
};

/* ---------------------- Функция: сохранить введенные данные профиля----------------------*/
const saveProfile = (evt) => {
  evt.preventDefault();
  username.textContent = usernameInput.value;
  occupation.textContent = occupationInput.value;
  closePopup(popupEditProfile);
};

/* ---------------------- Функция: создать карточку----------------------*/
const createCard = (data) => {
  return new Card(data.name, data.link, '#element-template')
};

/* ---------------------- Функция: добавить карточку----------------------*/
const addCard = (card) => {
  const cardElement = card.generateCard();
  elementContainer.prepend(cardElement);
};

/* ---------------------- Функция: сохранить введенные данные карточки----------------------*/
const saveCard = (evt) => {
  evt.preventDefault();

  const card = createCard({
    name: cardNameInput.value,
    link: cardLinkInput.value,
  });
  addCard(card);

  addCardForm.reset();

  closePopup(popupAddCard);
  evt.target.querySelector('.popup__button').classList.add('popup__button_disabled');
  evt.target.querySelector('.popup__button').disabled = true;
};

/* ---------------------- Функция: закрыть при нажатии на Esc ----------------------*/
const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

/* ---------------------- Отследить действия ----------------------*/
editProfileOpen.addEventListener('click', () => {
  usernameInput.value = username.textContent;
  occupationInput.value = occupation.textContent;
  openPopup(popupEditProfile);
});
editProfileForm.addEventListener('submit', saveProfile);

addCardOpen.addEventListener('click', () => openPopup(popupAddCard));
addCardForm.addEventListener('submit', saveCard);

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
});

/* ---------------------- Добавить первичные карточки ----------------------*/
initialCards.forEach((element) => {
  const card = createCard(element);
  addCard(card);
});
/* ---------------------- Включить валидацию ----------------------*/
editProfileValidator.enableValidation();
addCardValidator.enableValidation();

export { openPopup }
