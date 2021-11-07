import {mapFilters} from './form.js';
import {createMarker, deleteMarker} from './map.js';

const MAX_OFFERS_NUMBER = 10;
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');

const chooseType = (offer) => {
  if (offer.offer.type === housingType.value || housingType.value === 'any') {
    return true;
  }
};

const choosePrice = (offer) => {
  if (housingPrice.value === 'any') {
    return true;
  } else if (offer.offer.price < 10000 && housingPrice.value === 'low') {
    return true;
  } else if (offer.offer.price >= 10000 && offer.offer.price < 50000 && housingPrice.value === 'middle') {
    return true;
  } else if (offer.offer.price >= 50000 && housingPrice.value === 'high') {
    return true;
  }
};
const chooseRooms = (offer) => {
  if (offer.offer.rooms === +housingRooms.value || housingRooms.value === 'any') {
    return true;
  }
};
const chooseGuests = (offer) => {
  if (offer.offer.guests === +housingGuests.value || housingGuests.value === 'any') {
    return true;
  }
};
const chooseFeatures = (offer) => {
  const housingFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');
  const featuresValue = [...housingFeatures].map((item) => item.value);

  if (!offer.offer.features) {
    return false;
  }
  const filteredFeatures = featuresValue.filter((value) => offer.offer.features.includes(value));
  return filteredFeatures.length === featuresValue.length;
};

const setFilterListener = (offers) => {
  mapFilters.addEventListener('change', () => {
    const filteredOffers = offers.filter((offer) => chooseType(offer) && choosePrice(offer) && chooseRooms(offer) && chooseGuests(offer) && chooseFeatures(offer));
    deleteMarker();
    createMarker(filteredOffers.slice(0, MAX_OFFERS_NUMBER));
    return filteredOffers;
  });
};
export {MAX_OFFERS_NUMBER, setFilterListener};
