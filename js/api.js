import {createMarker} from './map.js';
import {createErrorMessage} from './errors.js';

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
