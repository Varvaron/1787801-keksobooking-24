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
  return errorContainer;
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

const closeAnyMessage = (element) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      element.classList.add('hidden');
    }
  });
  window.addEventListener('click', () => {
    element.classList.add('hidden');
  });
};

export {createErrorMessage, showSuccessMessage, showErrorMessage, closeAnyMessage};
