const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup'); //находим шаблон
const similarListFragment = document.createDocumentFragment(); // создаем фрагмент

//сопоставляем тип жилья из обекта с нужной надписью
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
// оставляем нужные особенности
const getPopupFeatures = (offerElement, offer) => {
  if (!offer.features) {
    offerElement.querySelector('.popup__features').style.display = 'none';
    return;
  }
  offer.features.forEach((userFeature) => {
    const chosenFeature = document.createElement('li');
    chosenFeature.classList.add('popup__feature');
    chosenFeature.classList.add(`popup__feature--${  userFeature}`);
    offerElement.querySelector('.popup__features').appendChild(chosenFeature);
  });
};

//добавляем нужное кол-во фото жилья
const getPopupPhotos = (offerElement, offer) => {
  if (!offer.photos) {
    offerElement.querySelector('.popup__photos').style.display = 'none';
    return;
  }
  offer.photos.forEach((userPhoto) => {
    const photoElement = document.createElement('img');
    photoElement.classList.add('popup__photo');
    photoElement.src = userPhoto;
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    offerElement.querySelector('.popup__photos').appendChild(photoElement);
  });
};

//проверяем поле "описание" на заполнение
const getPopupDescription = (offerElement, offer) => {
  if (!offer.description) {
    offerElement.querySelector('.popup__description').style = 'display:none';
    return;
  }
  offerElement.querySelector('.popup__description').textContent = offer.description;
};

//добавляем нужные данные в склонированный шаблон
const renderPopup = ({ offer, author}) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = getPopupType(offer);
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = offer.description;
  offerElement.querySelector('.popup__avatar').src = author.avatar;
  offerElement.querySelector('.popup__features').innerHTML = '';
  offerElement.querySelector('.popup__photos').innerHTML = '';
  getPopupFeatures(offerElement, offer);
  getPopupPhotos(offerElement, offer);
  getPopupDescription(offerElement, offer);
  similarListFragment.append(offerElement);
  return offerElement;
};
export {renderPopup};
