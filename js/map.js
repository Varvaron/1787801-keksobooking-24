import {switchActiveMode, switchInactiveMode} from './form.js';
import {renderPopup} from './similar-offers.js';

const DEFAULT_LAT = 35.681729;
const DEFAULT_LNG = 139.753927;

switchInactiveMode();

const addressInput = document.querySelector('#address');

const map = L.map('map-canvas').on('load', () => {
  switchActiveMode();
  addressInput.value = `${ DEFAULT_LAT}, ${DEFAULT_LNG}`;
})
  .setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
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
  iconSize: [40, 40],
  iconAnchor: [20, 40],
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
  }, 10);

  mainPin.setLatLng({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });

  map.closePopup();
};

export {createMarker, returnDefaultMapView, deleteMarker};
