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

export {createErrorMessage};
