import {returnDefaultMapView, deleteMarker, createMarker} from './map.js';
import {form, priceInput,  MIN_PRICES} from './form.js';
import {MAX_OFFERS_NUMBER, clearFilters} from './filters.js';
import {avatarPreview, photoContainer} from './preview-photos.js';

const DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';
const resetButton = form.querySelector('.ad-form__reset');

const clearFiltersAndForm = (offers) => {
  clearFilters();
  returnDefaultMapView();
  deleteMarker();
  priceInput.placeholder =  MIN_PRICES.flat;
  avatarPreview.src = DEFAULT_AVATAR_SRC;
  photoContainer.remove();
  createMarker(offers.slice(0, MAX_OFFERS_NUMBER));
};

let currentData;
resetButton.addEventListener('click', () => clearFiltersAndForm(currentData));
form.addEventListener('submit', () => clearFiltersAndForm(currentData));

export const updateData = (data) => {
  currentData = data;
};
