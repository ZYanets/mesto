/* ---------------------- Карточки ----------------------*/
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/* ---------------------- Блок Профиль ----------------------*/
export const popupEditProfile = '.popup_type_edit-profile';
export const editProfileOpen = document.querySelector('.profile__button-edit');
export const editProfileForm = document.querySelector('.popup__form_type_profile');
export const usernameInput = document.querySelector('.popup__input_type_username');
export const username = '.profile__username';
export const occupationInput = document.querySelector('.popup__input_type_occupation');
export const occupation = '.profile__occupation';

/* ---------------------- Блок Карточка ----------------------*/
export const popupAddCard = '.popup_type_add-card';
export const addCardOpen = document.querySelector('.profile__button-add');
export const addCardForm = document.querySelector('.popup__form_type_card');

/* ---------------------- Форма карточки ----------------------*/
export const elementContainer = document.querySelector('.elements');

/* ---------------------- Просмотр карточки ----------------------*/
export const popupViewCard = '.popup_type_view-card';

/* ---------------------- Объекты настроек для валидации ----------------------*/
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
