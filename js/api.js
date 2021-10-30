import {renderPopup} from './similar-offers.js';
import {createMarker} from './map.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((similarOffers) => {
    createMarker(similarOffers);
  });
