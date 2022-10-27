
function getRandomInRange(start, end) {
  return start >= 0 && end >= start ? Math.round(Math.random() * (end - start)) + start : -1;
}

function checkStringLength (commentary, maxLength) {
  return commentary.length <= maxLength;
}
checkStringLength('adsAsd', 10);

function getRandomArrayElement (array) {
  return array[getRandomInRange(0, array.length - 1)];
}

export {getRandomInRange, getRandomArrayElement, checkStringLength};
