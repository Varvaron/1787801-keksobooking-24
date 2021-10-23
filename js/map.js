import {switchActiveMode, switchInactiveMode} from './form.js';
switchInactiveMode();

const map = L.map('map-canvas').on('load', () => {
  switchActiveMode();
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
