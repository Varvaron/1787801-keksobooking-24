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

const getRandomElement = (array) => array[getRandomFractFromTo(0, array.length - 1)];
export {getRandomIntFromTo, getRandomFractFromTo, getRandomElement};
