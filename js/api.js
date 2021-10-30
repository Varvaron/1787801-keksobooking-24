import {createMarker} from './map.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((similarOffers) => {
    createMarker(similarOffers.slice(0, 10));
  });
