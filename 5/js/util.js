

function getRandomInRange(start, end) {
  return start >= 0 && end >= start ? Math.round(Math.random() * (end - start)) + start : -1;
}

const checkStringLength = (string, length) => string.length <= length;
checkStringLength('чтобы линтер не ругался', 60);

export{getRandomInRange};
