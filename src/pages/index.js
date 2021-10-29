import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import { popupAvatar, avatar, changeAvatarOpen, avatarForm,
        popupEditProfile, editProfileOpen, editProfileForm,
        usernameInput, username, aboutInput, about,
        popupAddCard, popupDeleteCard, addCardOpen, addCardForm,
        elementContainer, popupViewCard, validationConfig } from '../utils/constants.js'

let userId = null;
let myCard = null;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
  headers: {
    authorization: '8640dfea-edcf-4553-ad3c-1569bb70c97f',
    'Content-Type': 'application/json'
  }
});

/* ---------------------- Валидация ----------------------*/
const editProfileValidator = new FormValidator(validationConfig, editProfileForm);
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(validationConfig, addCardForm);
addCardValidator.enableValidation();
const changeAvatarValidator = new FormValidator(validationConfig, avatarForm);
changeAvatarValidator.enableValidation();


const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item, userId));
  }
}, elementContainer);

/* ---------------------- Подгрузить данные с сервера ----------------------*/
api
  .getAppInfo()
  .then(([ userInfoRes, cardListRes ]) => {
    userInfo.setUserInfo(userInfoRes);
    userId = userInfoRes._id;
    cardList.renderItems(cardListRes);
  })
  .catch(err => console.log(`Ошибка загрузки данных с сервера: ${err}`))

/* ---------------------- Карточка пользователя ----------------------*/
const userInfo = new UserInfo({ name: username, about: about, avatar: avatar })

const setProfileData = () => {
  const userData = userInfo.getUserInfo();
  usernameInput.value = userData.name;
  aboutInput.value = userData.about;
  popupWithFormProfile.open();
}

function createCard (cardData, userId) {
  const newCard = new Card(
    cardData,
    '#element-template',
    { handleCardClick: popupWithImage.open.bind(popupWithImage),
      addLike: (cardData) => {
        api.addLike(cardData)
          .then((cardData) => {
            newCard.setLikesQuantity(cardData);
            newCard.addLike(cardData);
          })
          .catch(err => console.log(`Произошла ошибка: ${err}`))
        },
      deleteLike: (cardData) => {
        api.deleteLike(cardData)
          .then((cardData) => {
            newCard.setLikesQuantity(cardData);
            newCard.deleteLike(cardData);
          })
          .catch(err => console.log(`Произошла ошибка: ${err}`))
        },
      handleDeleteCardClick: () => {
        myCard = newCard;
        popupWithFormDelete.open(cardData);
    }},
    userId
  )
  return newCard.generateCard();
};

/* ---------------------- Попапы ----------------------*/
const popupWithImage = new PopupWithImage(popupViewCard);
popupWithImage.setEventListeners();

const popupWithFormProfile = new PopupWithForm(popupEditProfile, {
  submitForm: (data) => {
    popupWithFormProfile.renderLoading(true);
    api.updateUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupWithFormProfile.close()
      })
      .catch(err => console.log(`Произошла ошибка: ${err}`))
      .finally(() => {
        popupWithFormProfile.renderLoading(false);
      })
  }
})
popupWithFormProfile.setEventListeners();

const popupWithFormCard = new PopupWithForm(popupAddCard, {
  submitForm: (card) => {
    popupWithFormCard.renderLoading(true);
      api.addCard(card)
        .then((data) => {
          popupWithFormCard.close();
          cardList.addItem(createCard(data, userId));
        })
        .catch(err => console.log(`Произошла ошибка: ${err}`))
        .finally(() => {
          popupWithFormCard.renderLoading(false);
        })
  }
})
popupWithFormCard.setEventListeners();

const popupWithFormDelete = new PopupWithDelete(popupDeleteCard, {
  submitForm: (card) => {
    popupWithFormDelete.renderLoading(true);
      api.deleteCard(card._id)
        .then(() => {
          myCard.removeCard();
          popupWithFormDelete.close();
        })
        .catch(err => console.log(`Произошла ошибка: ${err}`))
        .finally(() => {
          popupWithFormDelete.renderLoading(false);
        })
    }
  }
)
popupWithFormDelete.setEventListeners();

const popupWithFormAvatar = new PopupWithForm(popupAvatar, {
  submitForm: (data) => {
    popupWithFormAvatar.renderLoading(true);
      api.changeAvatar(data)
        .then((res) => {
          userInfo.setUserInfo(res);
          popupWithFormAvatar.close();
        })
        .catch(err => console.log(`Произошла ошибка: ${err}`))
        .finally(() => {
          popupWithFormAvatar.renderLoading(false);
        })
    }
  }
)
popupWithFormAvatar.setEventListeners();

/* ---------------------- Добавить слушатели ----------------------*/
editProfileOpen.addEventListener('click', setProfileData);

addCardOpen.addEventListener('click', () => {
  popupWithFormCard.open();
  addCardValidator.disableSubmitButton();
});

changeAvatarOpen.addEventListener('click', () => {
  popupWithFormAvatar.open();
  changeAvatarValidator.disableSubmitButton();
})
