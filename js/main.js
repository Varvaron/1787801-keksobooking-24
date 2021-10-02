const getRandomIntFromTo = function (min, max) {
  if (max <= min) {
    return 'Некорректный диапазон чисел: значение "до" не может быть меньше или равно значению "от".';
  }
  if (min < 0 || max < 0) {
    return 'Некорректный диапазон чисел: значения "от" и "до" не могут быть отрицательными';
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomFractFromTo = function (min, max, digits) {
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

const createAutor = function () {
  let randomAvatar = +getRandomIntFromTo(1, 10);
  if (randomAvatar !== 10) {
    randomAvatar = `0${  randomAvatar}`;
  }
  return {
    avatar: `img/avatars/user${randomAvatar}.png`,
  };
};
createAutor();

const createLocation = function () {
  return {
    lat: getRandomFractFromTo(35.65000, 35.70000, 5),
    lng: getRandomFractFromTo(139.70000, 139.80000, 5),
  };
};
createLocation();

const createOffer = function () {

  return {
    title: 'Сдаю квартиру посуточно',
    address: `{{location.lat}}, {{location.lng}}`,
    price: getRandomIntFromTo(1000, 10000),
    type: types[getRandomIntFromTo(0, types.length - 1)],
    rooms: getRandomIntFromTo(1, 5),
    guests: getRandomIntFromTo(1, 10),
    checkin: hours[getRandomIntFromTo(0, hours.length - 1)],
    checkout: hours[getRandomIntFromTo(0, hours.length - 1)],
    features: homeFeatures[getRandomIntFromTo(0, homeFeatures.length - 1)],
    description: 'Уютная квартира со всеми удобствами, можно заселиться с домашними питомцами',
    photos: '',
  };
};

createOffer();
