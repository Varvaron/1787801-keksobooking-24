import {createArray} from './data.js';
import {getRandomElement} from './utils.js';

const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup'); //находим шаблон
const similarListOffer = document.querySelector('#map-canvas'); //находим место для отрисовки в разметке
const similarListFragment = document.createDocumentFragment(); // создаем фрагмент
const similarOffers = createArray(10); //создаем объявления

//сопоставляем тип жилья из обекта с нужной надписью
const getPopupType = ({ offer }) => {
  switch (offer.type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};
//оставляем только те особенности в разметке, которые есть у объявления
const getPopupFeatures = (popupItems, { offer }) => {
  popupItems.forEach((popupItem) => {
    const chosenFeatures = offer.features;
    const isChosen = chosenFeatures.some(
      (chosenFeature) => popupItem.classList.contains(`popup__feature--${chosenFeature}`),
    );
    if (!isChosen) {popupItem.remove();}
  });

  return popupItems;
};

//проверяем наличие описания (необязательное поле)
// const getPopupDescription = ({offer}) => {
//   const descriptionElement = document.querySelector('.popup__description');
//   if (!offer.description) {
//     descriptionElement.innerHTML = '';
//   }
// };

//добавляем нужное кол-во картинок жилья
// const getPopupPicture = (element, {offer}) => {

// };
//клонируем шаблон и добавляем нужные данные в шаблон
const renderPopup = (offer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  const popupContainer = similarOfferTemplate.querySelector('.popup__features');
  let popupList = popupContainer.querySelectorAll('.popup__feature');
  popupList = getPopupFeatures(popupList, offer);

  similarOffers.forEach(() => {
    offerElement.querySelector('.popup__title').textContent = offer.offer.title;
    offerElement.querySelector('.popup__text--address').textContent = offer.offer.adress;
    offerElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
    offerElement.querySelector('.popup__type').textContent = getPopupType(offer);
    offerElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
    offerElement.querySelector('.popup__features').content = popupList;
    offerElement.querySelector('.popup__description').textContent = offer.offer.description;
    offerElement.querySelector('.popup__avatar').src = offer.author.avatar;
    similarListFragment.append(offerElement);
  });
  similarListOffer.appendChild(similarListFragment);
};

renderPopup(getRandomElement(similarOffers));
export {similarOffers};
