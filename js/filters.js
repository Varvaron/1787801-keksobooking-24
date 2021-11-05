import {mapFilters} from './form.js';

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
const setFilterListener = (offer) => {
  mapFilters.addEventListener('change', () => onFilterChange(offer));
};

export {setFilterListener};
