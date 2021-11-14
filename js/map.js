import {switchActiveMode, switchInactiveMode} from './form.js';
import {renderPopup} from './similar-offers.js';
import {getData} from './api.js';

const DEFAULT_LAT = 35.681729;
const DEFAULT_LNG = 139.753927;
const MAP_ZOOM = 10;
const MAIN_PIN_SIZE = 52;
const PIN_SIZE = 40;
const addressInput = document.querySelector('#address');
switchInactiveMode();

const map = L.map('map-canvas').on('load', () => {
  switchActiveMode();
  getData();
})
  .setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE/2, MAIN_PIN_SIZE],
});


const mainPin = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPin.addTo(map);

mainPin.on('moveend', (evt) => {
  const mainPinCoordinates = evt.target.getLatLng();
  addressInput.value = `${mainPinCoordinates.lat.toFixed(5)}, ${mainPinCoordinates.lng.toFixed(5)}`;
});


const similarOfferIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [PIN_SIZE, PIN_SIZE],
  iconAnchor: [PIN_SIZE/2, PIN_SIZE],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offers) => {
  offers.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon: similarOfferIcon,
    });
    marker.addTo(markerGroup).bindPopup(renderPopup(offer));
    return marker;
  });
};

const deleteMarker = () => {
  markerGroup.clearLayers();
};

const returnDefaultMapView = () => {
  map.setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, MAP_ZOOM);

  mainPin.setLatLng({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });

  map.closePopup();
};

export {createMarker, returnDefaultMapView, deleteMarker};
