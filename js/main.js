import { getData } from './api.js';
import { bigPictureHandler } from './bigPicture.js';
import { uploadFormHandler } from './form.js';
import { createUsersPictures } from './gallery.js';
import { showFilter } from './filterPhotos.js';
import { showError } from './apiErrorsHandler.js';
import './preview.js';

const body = document.querySelector('body');

getData((data) => {
  createUsersPictures(data);
  showFilter(data);
}, showError);

bigPictureHandler();
uploadFormHandler();

export { body };
