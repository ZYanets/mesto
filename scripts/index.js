const initialCards = [
  {
    name: 'Петра',
    link: './images/element-petra.jpg'
  },
  {
    name: 'Гранд-Каньон',
    link: './images/element-grand-canyon.jpg'
  },
  {
    name: 'Йеллоустон',
    link: './images/element-yellowstone-park.jpg'
  },
  {
    name: 'Ниагарский водопад',
    link: './images/element-niagara-falls.jpg'
  },
  {
    name: 'Йосемитcкий водопад',
    link: './images/element-yosemite-falls.jpg'
  },
  {
    name: 'Водопад Виктория',
    link: './images/element-victoria-falls.jpg'
  }
];

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

/* ---------------------- Функция: открыть и закрыть форму ----------------------*/
const openPopup = (popup) => popup.classList.add('popup_opened');
const closePopup = (popup) => popup.classList.remove('popup_opened');

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
  cardElement.querySelector('.element__title').textContent = card.name;
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__image').alt = card.name;

  /* ---------------------- Отследить действия внутри карточки ----------------------*/
  cardElement.querySelector('.element__button-like').addEventListener('click', likeCard);
  cardElement.querySelector('.element__button-delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__image').addEventListener('click', () => viewCard(card));

  return cardElement;
};

/* ---------------------- Функция: добавить карточку----------------------*/
const addCard = (card) => {
  elementContainer.prepend(createCard(card));
};

/* ---------------------- Функция: сохранить введенные данные карточки----------------------*/
const saveCard = (evt) => {
  evt.preventDefault();

  const cardNameInput = document.querySelector('.popup__input_type_card-name').value;
  const cardLinkInput = document.querySelector('.popup__input_type_card-link').value;

  addCard({
    name: cardNameInput,
    link: cardLinkInput,
  });

  addCardForm.reset();
  closePopup(popupAddCard);
};

/* ---------------------- Функция: просмотреть карточку----------------------*/
const viewCard = (card) => {
  popupViewCard.querySelector('.popup__view-card-photo').src = card.link;
  popupViewCard.querySelector('.popup__view-card-caption').textContent = card.name;
  popupViewCard.querySelector('.popup__view-card-photo').alt = card.name;
  openPopup(popupViewCard);
};

/* ---------------------- Функция: удалить карточку----------------------*/
const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

/* ---------------------- Функция: поставить лайк ----------------------*/
const likeCard = (evt) => {
  evt.target.closest('.element__button-like').classList.toggle('element__button-like_active');
};

/* ---------------------- Отследить действия ----------------------*/
editProfileOpen.addEventListener('click', () => {
  usernameInput.value = username.textContent;
  occupationInput.value = occupation.textContent;
  openPopup(popupEditProfile);
});
editProfileClose.addEventListener('click', () => closePopup(popupEditProfile));
editProfileForm.addEventListener('submit', saveProfile);

addCardOpen.addEventListener('click', () => openPopup(popupAddCard));
addCardClose.addEventListener('click', () => closePopup(popupAddCard));
addCardForm.addEventListener('submit', saveCard);

viewCardClose.addEventListener('click', () => closePopup(popupViewCard));

initialCards.forEach((element) => {
  addCard(element);
});
