import {form} from './form.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const PHOTO_SIZE = 70;

const avatarChooser = form.querySelector('#avatar');
const avatarPreview = form.querySelector('.ad-form-header__preview img');
const photoChooser = form.querySelector('#images');
const photoPreview = form.querySelector('.ad-form__photo');
const photoContainer = document.createElement('img');

avatarChooser.addEventListener('change', () => {
  const avatar = avatarChooser.files[0];
  const avatarName = avatar.name.toLowerCase();

  const matches = FILE_TYPES.some((type) => avatarName.endsWith(type));
  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatar);
  }
});

photoChooser.addEventListener('change', () => {
  const photo = photoChooser.files[0];
  const photoName = photo.name.toLowerCase();

  photoContainer.width = PHOTO_SIZE;
  photoContainer.height = PHOTO_SIZE;
  photoContainer.alt = 'Фото жилья';

  const matches = FILE_TYPES.some((type) => photoName.endsWith(type));
  if (matches) {
    photoContainer.src = URL.createObjectURL(photo);
  }
  photoPreview.appendChild(photoContainer);
  return photoContainer;
});

export {avatarPreview, photoContainer};
