import {returnDefaultMapView} from './map.js';
import {form} from './form.js';

const resetButton = form.querySelector('.ad-form__reset');
resetButton.addEventListener('click', returnDefaultMapView);
