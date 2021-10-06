/* ---------------------- Функция: открыть форму ----------------------*/
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
};

/* ---------------------- Функция: закрыть форму ----------------------*/
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
};

/* ---------------------- Функция: закрыть при нажатии на Esc ----------------------*/
const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

/* ---------------------- Просмотр карточки ----------------------*/
const popupViewCard = document.querySelector('.popup_type_view-card');
const viewCardPhoto = popupViewCard.querySelector('.popup__view-card-photo');
const viewCardCaption = popupViewCard.querySelector('.popup__view-card-caption');

export { openPopup, closePopup, popupViewCard, viewCardPhoto, viewCardCaption }
