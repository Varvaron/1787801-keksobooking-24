import {switchActiveMode, switchInactiveMode} from './form.js';
import {similarOffers, renderPopup} from './similar-offers.js';

const addressInput = document.querySelector('#address');
switchInactiveMode();

const map = L.map('map-canvas').on('load', () => {
  switchActiveMode();
  addressInput.value = '35.681729, 139.753927';
})
  .setView({
    lat: 35.681729,
    lng: 139.753927,
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
    lat: 35.681729,
    lng: 139.753927,
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

const createMarker = (offers) => {
  offers.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon: similarOfferIcon,
    });
    marker.addTo(map).bindPopup(renderPopup(offer));
  });
};

createMarker(similarOffers);
