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
const editProfileClose = document.querySelector('.popup__button-close_type_profile');

/* ---------------------- Блок Карточка ----------------------*/
const popupAddCard = document.querySelector('.popup_type_add-card');
const addCardOpen = document.querySelector('.profile__button-add');
const addCardForm = document.querySelector('.popup__form_type_card');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_card-link');
const addCardClose = document.querySelector('.popup__button-close_type_card');

/* ---------------------- Форма карточки ----------------------*/
const elementContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template').content;

/* ---------------------- Просмотр карточки ----------------------*/
const popupViewCard = document.querySelector('.popup_type_view-card');
const viewCardClose = document.querySelector('.popup__button-close_type_view-card');
const viewCardPhoto = popupViewCard.querySelector('.popup__view-card-photo');
const viewCardCaption = popupViewCard.querySelector('.popup__view-card-caption');

/* ---------------------- Объекты настроек для валидации ----------------------*/
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

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
const createCard = (card) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');

  cardElement.querySelector('.element__title').textContent = card.name;
  elementImage.src = card.link;
  elementImage.alt = card.name;

  /* ---------------------- Отследить действия внутри карточки ----------------------*/
  cardElement.querySelector('.element__button-like').addEventListener('click', likeCard);
  cardElement.querySelector('.element__button-delete').addEventListener('click', deleteCard);
  elementImage.addEventListener('click', () => viewCard(card));

  return cardElement;
};

/* ---------------------- Функция: добавить карточку----------------------*/
const addCard = (card) => {
  elementContainer.prepend(createCard(card));
};

/* ---------------------- Функция: сохранить введенные данные карточки----------------------*/
const saveCard = (evt) => {
  evt.preventDefault();

  addCard({
    name: cardNameInput.value,
    link: cardLinkInput.value,
  });

  addCardForm.reset();

  closePopup(popupAddCard);
  evt.target.querySelector('.popup__button').classList.add('popup__button_disabled');
  evt.target.querySelector('.popup__button').disabled = true;
};

/* ---------------------- Функция: просмотреть карточку----------------------*/
const viewCard = (card) => {
  viewCardCaption.textContent = card.name;
  viewCardPhoto.src = card.link;
  viewCardPhoto.alt = card.name;
  openPopup(popupViewCard);
};

/* ---------------------- Функция: удалить карточку----------------------*/
const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

/* ---------------------- Функция: поставить лайк ----------------------*/
const likeCard = (evt) => {
  evt.target.classList.toggle('element__button-like_active');
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

initialCards.forEach((element) => {
  addCard(element);
});

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

/* ---------------------- Включить валидацию ----------------------*/
enableValidation(validationConfig);
