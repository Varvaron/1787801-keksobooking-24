const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1e6;

const form = document.querySelector('.ad-form');
const titleInput = form.querySelector('#title');
const priceInput = form.querySelector('#price');
const roomNumberSelect = form.querySelector('#room_number');
const capacitySelect = form.querySelector('#capacity');
const formFieldsets = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');

const switchInactiveMode = () => {
  form.classList.add('ad-form--disabled');
  formFieldsets.forEach((formFieldset) => {
    formFieldset.disabled = true;
  });
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.disabled = true;
};

const switchActiveMode = () => {
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach((formFieldset) => {
    formFieldset.disabled = false;
  });
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.disabled = false;
};

titleInput.addEventListener('input', () => {
  const titleLength = titleInput.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Мин. длина заголовка - ${ MIN_TITLE_LENGTH} симв. Введите еще ${ MIN_TITLE_LENGTH - titleLength } симв.`);
    titleInput.style.boxShadow = '0 0 2px 2px red';
  } else if (titleLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Макс. длина заголовка - ${ MAX_TITLE_LENGTH} симв. Удалите еще ${ titleLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
    titleInput.style.boxShadow = '';
  }
  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;
  if (priceValue > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Макс. цена за ночь - ${ MAX_PRICE_VALUE}`);
    priceInput.style.boxShadow = '0 0 2px 2px red';
  } else {
    priceInput.setCustomValidity('');
    priceInput.style.boxShadow = '';
  }
  priceInput.reportValidity();
});


const onRoomCapacityChange = () => {
  const rooms = +roomNumberSelect.value;
  const capacity = +capacitySelect.value;
  capacitySelect.style.boxShadow = '0 0 2px 2px red';
  if (rooms < capacity) {
    capacitySelect.setCustomValidity('Кол-во гостей превышает кол-во комнат');
  } else if (rooms === 100 && capacity !== 0) {
    capacitySelect.setCustomValidity('Для 100 комнат доступен только вариант "Не для гостей"');
  } else if (rooms !== 100 && capacity === 0) {
    capacitySelect.setCustomValidity('Вариант "Не для гостей" доступен только для 100 комнат');
  } else {
    capacitySelect.setCustomValidity('');
    capacitySelect.style.boxShadow = '';
  }
  capacitySelect.reportValidity();
};

roomNumberSelect.addEventListener('change', onRoomCapacityChange);
capacitySelect.addEventListener('change', onRoomCapacityChange);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    if (!capacitySelect.checkValidity()) {
      capacitySelect.style.boxShadow = '0 0 2px 2px red';
      evt.preventDefault();
    }
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
        type: 'multipart/form-data',
      },
    ).then(() => onSuccess());
  });
};


export {switchInactiveMode, switchActiveMode, setUserFormSubmit};
