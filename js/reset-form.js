import {returnDefaultMapView, deleteMarker, createMarker} from './map.js';
import {form} from './form.js';
import {MAX_OFFERS_NUMBER, clearFilters} from './filters.js';

const resetButton = form.querySelector('.ad-form__reset');

const clearFiltersAndForm = (offers) => {
  clearFilters();
  returnDefaultMapView();
  deleteMarker();
  createMarker(offers.slice(0, MAX_OFFERS_NUMBER));
};

let currentData;
resetButton.addEventListener('click', () => clearFiltersAndForm(currentData));
form.addEventListener('submit', () => clearFiltersAndForm(currentData));

export const updateData = (data) => {
  currentData = data;
};
