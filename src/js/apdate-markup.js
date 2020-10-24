import imagesTemplateItem from '../templates/tamplate-item.hbs';
import refs from './refs.js';
import serviceScrollPosition from './update-position.js';
export default {
  updateMarkup(item) {
    refs.galleryRef.insertAdjacentHTML('beforeend', imagesTemplateItem(item));
    refs.buttonRef.classList.remove('hiden');
    serviceScrollPosition.updatePosition();
  },
};
