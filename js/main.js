const getRandomIntFromTo = (min, max) => {
  if (max <= min) {
    return 'Некорректный диапазон чисел: значение "до" не может быть меньше или равно значению "от".';
  }
  if (min < 0 || max < 0) {
    return 'Некорректный диапазон чисел: значения "от" и "до" не могут быть отрицательными';
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomFractFromTo = (min, max, digits) => {
  if (max <= min) {
    return 'Некорректный диапазон чисел: значение "до" не может быть меньше или равно значению "от".';
  }
  if (min < 0 || max < 0) {
    return 'Некорректный диапазон чисел: значения "от" и "до" не могут быть отрицательными';
  }
  return Number((min + Math.random() * (max - min)).toFixed(digits));
};

getRandomIntFromTo(5, 10);
getRandomFractFromTo(1.5, 1.7, 5);

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const hours = ['12:00', '13:00', '14:00'];
const homeFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const housePhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createAutor = (i) => {
  if (i !== 10) {
    i = `0${  i}`;
  }
  return {
    avatar: `img/avatars/user${i}.png`,
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
  type: types[getRandomIntFromTo(0, types.length - 1)],
  rooms: getRandomIntFromTo(1, 5),
  guests: getRandomIntFromTo(1, 10),
  checkin: hours[getRandomIntFromTo(0, hours.length - 1)],
  checkout: hours[getRandomIntFromTo(0, hours.length - 1)],
  features: housePhotos.slice(0, getRandomIntFromTo(0, homeFeatures.length)),
  description: 'Уютная квартира со всеми удобствами, можно заселиться с домашними питомцами',
  photos: housePhotos.slice(0, getRandomIntFromTo(0, housePhotos.length)),
});

const createObject = (i) => {
  const location = createLocation();

  return {
    author: createAutor(i),
    offer: createOffer(location),
    location: location,
  };
};

const createArray = (elements) => {
  const userAds = [];
  for (let i = 1; i <= elements; i++) {
    userAds.push(createObject(i));
  }
  return userAds;
};

createArray(10);
