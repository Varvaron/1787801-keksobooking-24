import {getRandomIntFromTo, getRandomFractFromTo, getRandomElement} from './utils.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const HOURS = ['12:00', '13:00', '14:00'];
const HOUSE_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const HOUSE_PHOTOES = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createAuthor = (id) => {
  id += 1;
  id = `${  id}`;
  const paddedId = id.padStart(2, '0');
  return {
    avatar: `img/avatars/user${paddedId}.png`,
  };
};
const createLocation = () => ({
  lat: getRandomFractFromTo(35.65000, 35.70000, 5),
  lng: getRandomFractFromTo(139.70000, 139.80000, 5),
});

const createOffer = (location) => ({
  title: 'Сдаю квартиру посуточно',
  address: `${location.lat  }, ${  location.lng}`,
  price: getRandomIntFromTo(1000, 10000),
  type: getRandomElement(TYPES),
  rooms: getRandomIntFromTo(1, 5),
  guests: getRandomIntFromTo(1, 10),
  checkin: getRandomElement(HOURS),
  checkout: getRandomElement(HOURS),
  features: HOUSE_FEATURES.slice(0, getRandomIntFromTo(1, HOUSE_FEATURES.length)),
  description: 'Уютная квартира со всеми удобствами, можно заселиться с домашними питомцами',
  photos: HOUSE_PHOTOES.slice(0, getRandomIntFromTo(1, HOUSE_PHOTOES.length)),
});

const createObject = (id) => {
  const location = createLocation();

  return {
    author: createAuthor(id),
    offer: createOffer(location),
    location: location,
  };
};

const createArray = (length) => Array(length).fill(null).map((item, i) => createObject(i));

export {createArray};