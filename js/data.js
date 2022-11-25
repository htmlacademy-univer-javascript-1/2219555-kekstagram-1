import { getRandomInRange } from './util.js';

const MAX_PHOTOS_QUANTITY = 25;
const AVATAR_QUANTITY = 6;
const MIN_LIKE_QUANTITY = 15;
const MAX_LIKE_QUANTITY = 200;
const COMMENTS_NUMBER = 6;

const NAMES = [
  'Артём','Виктор','Мария','Никита',
  'Сергей','Илья','Андрей','Ксения',
  'Фёдор','Влад','Евгений', 'Саша'
];
const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Офигенная машина, бро',
  'Это куда поехал?',
  'Нормально вас жизнь потрепала',
  'Жесть',
  'Надеюсь это всё когда-нибудь закончится',
  'Выколите мне глаза',
  'Ужс',
  'Завтра будет лучше',
];

const createUserData = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInRange(1, AVATAR_QUANTITY)}.svg`,
  message: MESSAGES[getRandomInRange(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInRange(0, NAMES.length - 1)],
});

const createPhotoData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomInRange(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInRange(MIN_LIKE_QUANTITY, MAX_LIKE_QUANTITY),
  comments: Array.from({length: getRandomInRange(1, COMMENTS_NUMBER)}).map((value, index) => createUserData(index + 1)),
});

const getPhotos = () => Array.from({length: MAX_PHOTOS_QUANTITY}).map((value, index) => createPhotoData(index + 1));

export {getPhotos};
