import imagesTemplateItem from '../templates/tamplate-item.hbs';
import refs from './refs.js';

export default apdateMarkup = item => {
  refs.galleryRef.innerHTML = imagesTemplateItem(item);
};
