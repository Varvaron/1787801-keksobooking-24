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
