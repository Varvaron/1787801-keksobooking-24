const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1e6;

const form = document.querySelector('.ad-form');
const submit = form.querySelector('.ad-form__submit');
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

const roomNumberSelect = form.querySelector('#room_number');
const capacitySelect = form.querySelector('#capacity');

const onRoomNumberChange = () => {
  if (roomNumberSelect.value === '1' && !capacitySelect.value === '1') {
    capacitySelect.setCustomValidity('Можно выбрать только "для 1 гостя"');

  } else if (roomNumberSelect.value === '100' && !capacitySelect.value === '0') {
    capacitySelect.setCustomValidity('Можно выбрать только "не для гостей"');

  } else if (roomNumberSelect.value === '2' && (capacitySelect.value !== '1' || capacitySelect.value !== '2')) {
    capacitySelect.setCustomValidity('Можно выбрать "для 1 гостя" или "для 2 гостей"');

  } else if (roomNumberSelect.value === '3' && capacitySelect.value === '0') {
    capacitySelect.setCustomValidity('Значение "не для гостей" недоступно');

  } else {
    capacitySelect.setCustomValidity('');
  }
  capacitySelect.reportValidity();
};

const onCapacityChange = () => {
  console.log(capacitySelect.value);
  if (roomNumberSelect.value === '1'&& capacitySelect.value === '1') {
    capacitySelect.setCustomValidity('');
  } else if (roomNumberSelect.value === '100' && capacitySelect.value === '0') {
    capacitySelect.setCustomValidity('');
  } else if (roomNumberSelect.value === '3' && !capacitySelect.value === '0') {
    capacitySelect.setCustomValidity('');
  } else if ((roomNumberSelect.value === '1' || roomNumberSelect.value === '2') && capacitySelect.value === '2'){
    capacitySelect.setCustomValidity('');
  }
  capacitySelect.reportValidity();
};

roomNumberSelect.addEventListener('change', onRoomNumberChange);
capacitySelect.addEventListener('change', onCapacityChange);

// roomNumberSelect.addEventListener('change', () => {
//   console.log(roomNumberSelect.value);
//   console.log(capacitySelect.value);
//   if (roomNumberSelect.value === '1' && !capacitySelect.value === '1') {
//     capacitySelect.setCustomValidity('Можно выбрать только "для 1 гостя"');
//     submit.disabled = true;
//   } else if (roomNumberSelect.value === '100' && !capacitySelect.value === '0') {
//     capacitySelect.setCustomValidity('Можно выбрать только "не для гостей"');
//     submit.disabled = true;
//   } else if (roomNumberSelect.value === '2' && (capacitySelect.value !== '1' || capacitySelect.value !== '2')) {
//     capacitySelect.setCustomValidity('Можно выбрать "для 1 гостя" или "для 2 гостей"');
//     submit.disabled = true;
//   } else if (roomNumberSelect.value === '3' && capacitySelect.value === '0') {
//     capacitySelect.setCustomValidity('Значение "не для гостей" недоступно');
//     submit.disabled = true;
//   } else {
//     capacitySelect.setCustomValidity('');
//   }
//   capacitySelect.reportValidity();
// });


