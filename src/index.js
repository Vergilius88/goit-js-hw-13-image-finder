import './styles.css';
import serviceScrollPosition from './js/update-position.js';
import serviceMarkup from './js/apdate-markup.js';
import serviceAPI from './js/fetch-images.js';
import refs from './js/refs.js';

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  refs.galleryRef.innerHTML = '';
  serviceAPI.resetPage();
  const imagesName = event.target.elements.query.value;
  serviceAPI.query = imagesName.trim();
  serviceAPI.fetchImages().then(serviceMarkup.updateMarkup);
});
refs.buttonRef.addEventListener('click', () => {
  const positionScroll =
  window.pageYOffset;
  serviceScrollPosition.position = Number (positionScroll);
  
  serviceAPI.getNewPage();
  serviceAPI.fetchImages().then(serviceMarkup.updateMarkup);
});
