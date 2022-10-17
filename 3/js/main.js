const IMAGES_NUMBER = 25;
const COMMENTS_NUMBER = 3;

const NAMES = [
  'Артём','Виктор','Мария','Никита',
  'Сергей','Илья','Андрей','Ксения',
  'Фёдор','Влад','Евгений', 'Саша'
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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const AVATAR_QUANTITY = 6;
const MIN_LIKE_QUANTITY = 15;
const MAX_LIKE_QUANTITY = 200;

function getRandomInRange(start, end) {
  return start >= 0 && end >= start ? Math.round(Math.random() * (end - start)) + start : -1;
}

function checkStringLength (commentary, maxLength) {
  return commentary.length <= maxLength;
}

function getRandomArrayElement (array) {
  return array[getRandomInRange(0, DESCRIPTIONS.length - 1)];
}

let commentId = 0;
function createComment() {
  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInRange(1, AVATAR_QUANTITY)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}

let currentId = 0;
function createPhotography() {
  return {
    id: ++currentId,
    url: `photos/${currentId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInRange(MIN_LIKE_QUANTITY, MAX_LIKE_QUANTITY),
    comments: Array.from({length: COMMENTS_NUMBER}, createComment),
  };
}

const photographies = Array.from({length: IMAGES_NUMBER}, createPhotography);

checkStringLength('adsAsd', 10);
photographies();
