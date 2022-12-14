import { bigPictureHandler } from './bigPicture.js';
import { createUsersPictures } from './gallery.js';
import { uploadFormHandler } from './form.js';

export const body = document.querySelector('body');
createUsersPictures();
bigPictureHandler();
uploadFormHandler();

