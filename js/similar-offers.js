import {createArray} from './data.js';

const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarListOffer = document.querySelector('#map-canvas');

const similarOffers = createArray(10);
const similarListFragment = document.createDocumentFragment();

const getPopupType = (offer) => {
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

const getPopupFeatures = (offer) => {
  const popupContainer = similarOfferTemplate.querySelector('.popup__features');
  const popupList = popupContainer.querySelectorAll('.popup__feature');

  popupList.forEach((popupListItem) => {
    const choosenFeatures = offer.features;
    const isChoosen = choosenFeatures.some(
      (choosenFeature) => popupListItem.classList.contain(`popup__feature--${choosenFeature}`),
  );
  if (!isChoosen) {
    popupListItem.remove();
  }
});

similarOffers.forEach(() => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.adress;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = getPopupType(offer);
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerElement.querySelector('.popup__features').textContent = getPopupFeatures(offer);
  offerElement.querySelector('.popup__description').textContent = offer.description;
  offerElement.querySelector('.popup__avatar').src = author.avatar;
  similarListFragment.appendChild(offerElement);
});

similarListOffer.appendChild(similarListFragment);

export {similarOffers};
