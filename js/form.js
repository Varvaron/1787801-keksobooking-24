const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1e6;

const form = document.querySelector('.ad-form');
const titleInput = form.querySelector('#title');

titleInput.addEventListener('input', () => {
  const titleLength = titleInput.value.length;
  if (titleLength < MIN_TITLE_LENGTH ) {
    titleInput.setCustomValidity(`Мин. длина заголовка - ${ MIN_TITLE_LENGTH} симв. Введите еще ${ MIN_TITLE_LENGTH - titleLength } симв.`);
    titleInput.style = 'box-shadow: 0 0 2px 2px red';
  } else if (titleLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Мах. длина заголовка - ${ MAX_TITLE_LENGTH} симв. Удалите еще ${ titleLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
    titleInput.style = '';
  }
  titleInput.reportValidity();
});

const priceInput = form.querySelector('#price');

priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;
  if (priceValue > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Маx. цена за ночь - ${ MAX_PRICE_VALUE}`);
    priceInput.style = 'box-shadow: 0 0 2px 2px red';
  } else {
    priceInput.setCustomValidity('');
    priceInput.style = '';
  }
  priceInput.reportValidity();
});


