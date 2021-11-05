import {mapFilters} from './form.js';
import {createMarker, deleteMarker} from './map.js';

const MAX_OFFERS_NUMBER = 10;
const housingType = mapFilters.querySelector('#housing-type');

const onFilterChange = ({ offer }) => {
  console.log(offer.type);
  console.log(housingType.value);
  if (offer.type === housingType.value) {

    return true;
  } else {

    return false;
  }

};
const setFilterListener = (offers) => {
  mapFilters.addEventListener('change', () => {
    const filteredOffers = offers.filter(offer => offer.offer.type === housingType.value || housingType.value === 'any');
    deleteMarker();
    createMarker(filteredOffers.slice(0, 10));
    return filteredOffers;
  });
};

export {MAX_OFFERS_NUMBER, setFilterListener};
