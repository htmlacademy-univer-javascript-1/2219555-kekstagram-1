import { getRandomPositiveInt, getRandomArrayElement } from './util.js';

// const MAX_PHOTOS_QUANTITY = 25;
const AVATAR_QUANTITY = 6;
const MIN_LIKE_QUANTITY = 15;
const MAX_LIKE_QUANTITY = 200;
const COMMENTS_NUMBER = 6;

const NAMES = [
  'Артём','Виктор','Мария','Никита',
  'Сергей','Илья','Андрей','Ксения',
  'Фёдор','Влад','Евгений', 'Саша'
];
const COMMENTS = ['Всё отлично!',
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

function createRandomComments(amount) {
  const comments = [];
  for (let i = 0; i < amount; i++) {
    comments[i] = {
      id: i + 100,
      avatar: `img/avatar-${getRandomPositiveInt(1, AVATAR_QUANTITY)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: NAMES[getRandomPositiveInt(0, NAMES.length - 1)],
    };
  }
  return comments;
}

export function createImageDescriptions(amount) {
  const descriptions = [];
  for (let i = 0; i < amount; i++) {
    descriptions[i] = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInt(MIN_LIKE_QUANTITY, MAX_LIKE_QUANTITY),
      comments: createRandomComments(COMMENTS_NUMBER)
    };
  }
  return descriptions;
}
