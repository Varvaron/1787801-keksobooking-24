import {createErrorMessage, showSuccessMessage, showErrorMessage, closeAnyMessage} from './alerts.js';
import {createMarker} from './map.js';
import {form} from './form.js';
import {setFilterListener, MAX_OFFERS_NUMBER} from './filters.js';
import {updateData} from './reset-form.js';

const API_URL = 'https://24.javascript.pages.academy/keksobooking';

const getData = () => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(createErrorMessage('Не удалось загрузить данные с сервера'));
    })
    .then((response) => response.json())
    .then((similarOffers) => {
      createMarker(similarOffers.slice(0, MAX_OFFERS_NUMBER));
      setFilterListener(similarOffers);
      updateData(similarOffers);
    });
};

const sendData = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch(
      API_URL,
      {
        method: 'POST',
        body: formData,
        enctype: 'multipart/form-data',
      },
    ).then((response) => {
      if (response.ok) {
        evt.target.reset();
        showSuccessMessage();
        closeAnyMessage(document.querySelector('.success'));
      } else {
        showErrorMessage();
        closeAnyMessage(document.querySelector('.error'));
      }
    })
      .catch(() => {
        showErrorMessage();
        closeAnyMessage(document.querySelector('.error'));
      });
  });

};

sendData();
export {getData};
