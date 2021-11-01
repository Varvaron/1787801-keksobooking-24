import {createMarker} from './map.js';
import {createErrorMessage, showSuccessMessage, showErrorMessage} from './alerts.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(createErrorMessage('Не удалось загрузить данные с сервера'));

  })
  .then((response) => response.json())
  .then((similarOffers) => {
    createMarker(similarOffers.slice(0, 10));
  });


const setUserFormSubmit = (onSuccess) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
      enctype: 'multipart/form-data',
    },
    ).then((response) => {
    if (response.ok) {
      showSuccessMessage();
      onSuccess();
    } else {
      showErrorMessage();
    }
  })
    .catch(() => {
      showErrorMessage();
    });
});
