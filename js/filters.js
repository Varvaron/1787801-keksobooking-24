import {mapFilters} from './form.js';
import {createMarker, deleteMarker} from './map.js';
import {debounce} from './utils/debounce.js';

const MAX_OFFERS_NUMBER = 10;
const FILTER_PRICES = {
  low: 10000,
  high: 50000,
};

const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');

const chooseType = (offer) => offer.offer.type === housingType.value || housingType.value === 'any';

const choosePrice = (offer) => housingPrice.value === 'any'
  || offer.offer.price < FILTER_PRICES.low && housingPrice.value === 'low'
  || offer.offer.price >= FILTER_PRICES.low && offer.offer.price < FILTER_PRICES.high && housingPrice.value === 'middle'
  || offer.offer.price >=  FILTER_PRICES.high && housingPrice.value === 'high';

const chooseRooms = (offer) => offer.offer.rooms === +housingRooms.value || housingRooms.value === 'any';

const chooseGuests = (offer) => offer.offer.guests === +housingGuests.value || housingGuests.value === 'any';

const chooseFeatures = (offer) => {
  const housingFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');
  const featuresValue = [...housingFeatures].map((item) => item.value);

  if (!offer.offer.features) {
    return false;
  }
  return featuresValue.every((value) => offer.offer.features.includes(value));
};

const setFilterListener = (offers) => {
  mapFilters.addEventListener('change', debounce(() => {
    const filteredOffers = offers.filter((offer) => chooseType(offer) && choosePrice(offer) && chooseRooms(offer) && chooseGuests(offer) && chooseFeatures(offer));
    deleteMarker();
    createMarker(filteredOffers.slice(0, MAX_OFFERS_NUMBER));
    return filteredOffers;
  },
  ));
};

const clearFilters = () => {
  mapFilters.reset();
};
export {MAX_OFFERS_NUMBER, setFilterListener, clearFilters};
