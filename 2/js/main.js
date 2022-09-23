function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLengthString(string = '', maxLenght = 140){
  return string.length <= maxLenght;
}

getRandomInt(1, 5);
checkLengthString();
