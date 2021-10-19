import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import { initialCards, popupEditProfile, editProfileOpen,
        editProfileForm, usernameInput, username, occupationInput,
        occupation, popupAddCard, addCardOpen, addCardForm,
        elementContainer, popupViewCard, validationConfig } from '../utils/constants.js'

/* ---------------------- Попапы ----------------------*/
const popupWithImage = new PopupWithImage(popupViewCard);
popupWithImage.setEventListeners();

const popupWithFormProfile = new PopupWithForm(popupEditProfile, {
  submitForm: (data) => {
    userInfo.setUserInfo(data);
  }
})
popupWithFormProfile.setEventListeners();

const popupWithFormCard = new PopupWithForm(popupAddCard, {
  submitForm: (data) => {
    cardList.addItem(createCard(data));
  }
})
popupWithFormCard.setEventListeners();

/* ---------------------- Карточка пользователя ----------------------*/
const userInfo = new UserInfo({ username: username, occupation: occupation })

const setProfileData = () => {
  const userData = userInfo.getUserInfo();
  usernameInput.value = userData.username;
  occupationInput.value = userData.occupation;
  popupWithFormProfile.open();
}

/* ---------------------- Функция: создать карточку----------------------*/
const createCard = (data) => {
  return new Card(data, '#element-template', {handleCardClick: popupWithImage.open.bind(popupWithImage)}).generateCard();
};

/* ---------------------- Валидация ----------------------*/
const editProfileValidator = new FormValidator(validationConfig, editProfileForm);
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(validationConfig, addCardForm);
addCardValidator.enableValidation();

/* ---------------------- Добавить карточки ----------------------*/
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, elementContainer);
cardList.renderItems();

editProfileOpen.addEventListener('click', setProfileData);
addCardOpen.addEventListener('click', () => {
  popupWithFormCard.open();
})
