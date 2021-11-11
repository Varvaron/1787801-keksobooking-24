import {createMarker} from './map.js';
import {createErrorMessage, showSuccessMessage, showErrorMessage, closeAnyMessage} from './alerts.js';
import {form} from './form.js';
import {MAX_OFFERS_NUMBER, setFilterListener} from './filters.js';
import {updateData} from './reset-form.js';


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
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
        enctype: 'multipart/form-data',
      },
    ).then((response) => {
      if (response.ok) {
        showSuccessMessage();
        evt.target.reset();
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

getData();
sendData();
