import './styles.css';
import apdateMarkup from './js/apdate-markup.js';
import serviceAPI from './js/fetch-images.js';
import refs from './js/refs.js';

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();

  const imagesName = event.currentTarget.elements.query.value;
  serviceAPI.query = imagesName.trim();
  serviceAPI.fetchImages().then(apdateMarkup());

});
