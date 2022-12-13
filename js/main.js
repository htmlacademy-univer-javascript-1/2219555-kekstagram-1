import { bigPictureHandler } from './bigPicture.js';
import { createUsersPictures } from './gallery.js';
import './form.js';

const usersPictures = 25;

export const body = document.querySelector('body');

bigPictureHandler(createUsersPictures(usersPictures));

