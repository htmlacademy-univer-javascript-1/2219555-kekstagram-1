import { bigPictureHandler } from './bigPicture.js';
import { createUsersPictures } from './gallery.js';
import './form.js';

export const body = document.querySelector('body');
createUsersPictures();
bigPictureHandler();

