import {mapFilters} from './form.js';

const createErrorMessage = (message) => {
  const errorContainer = document.createElement('p');
  const main = document.querySelector('main');
  errorContainer.style.zindex = 10;
  errorContainer.style.backgroundColor = '#ff6d51';
  errorContainer.style.color = '#ffffff';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.padding = '20px';
  errorContainer.style.fontSize = '20px';
  errorContainer.style.borderRadius = '4px';
  errorContainer.textContent = message;

  document.body.insertBefore(errorContainer, main);
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.disabled = true;
  return errorContainer;
};

const closeAnyMessage = (element) => {
  const removeElement = () => {
    element.remove();
    document.removeEventListener('keydown', onEscKeydown);
    window.removeEventListener('click', onWindowClick);
  };
  function onEscKeydown (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      removeElement();
    }
  }
  function onWindowClick () {
    removeElement();
  }
  document.addEventListener('keydown', onEscKeydown);
  window.addEventListener('click', onWindowClick);
};

const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);
  return successMessage;
};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
  return errorMessage;
};
export {createErrorMessage, showSuccessMessage, showErrorMessage, closeAnyMessage};
