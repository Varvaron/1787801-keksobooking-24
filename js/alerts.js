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
  const successFragment = document.createDocumentFragment();

  const successMessage = successTemplate.cloneNode(true);
  successFragment.append(successMessage);
  document.body.append(successFragment);
  return successMessage;
};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorFragment = document.createDocumentFragment();

  const errorMessage = errorTemplate.cloneNode(true);
  errorFragment.append(errorMessage);
  document.body.append(errorFragment);
  return errorMessage;
};

export {createErrorMessage, showSuccessMessage, showErrorMessage};