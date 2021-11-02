import {createMarker} from './map.js';
import {createErrorMessage, showSuccessMessage, showErrorMessage} from './alerts.js';
import {form} from './form.js';

const getData = () => {
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
};
getData();

const setData = () => {
  form.addEventListener('submit', (evt) => {
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
      } else {
        showErrorMessage();
      }
    })
      .catch(() => {
        showErrorMessage();
      });
  });

};

export {getData, setData};
