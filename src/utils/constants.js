/* ---------------------- Блок Профиль ----------------------*/
export const popupAvatar = '.popup_type_avatar';
export const avatar = '.profile__avatar-image';
export const changeAvatarOpen = document.querySelector('.profile__avatar-edit');
export const avatarForm = document.querySelector('.popup__form_type_avatar');
export const avatarInput = document.querySelector('.popup__input_type_avatar-link');
export const popupEditProfile = '.popup_type_edit-profile';
export const editProfileOpen = document.querySelector('.profile__button-edit');
export const editProfileForm = document.querySelector('.popup__form_type_profile');
export const usernameInput = document.querySelector('.popup__input_type_username');
export const username = '.profile__username';
export const aboutInput = document.querySelector('.popup__input_type_about');
export const about = '.profile__about';

/* ---------------------- Блок Карточка ----------------------*/
export const popupAddCard = '.popup_type_add-card';
export const popupDeleteCard = '.popup_type_delete-card';
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
