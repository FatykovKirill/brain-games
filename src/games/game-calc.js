import { getRandomNumber } from '../index.js';

const min = 1;
const max = 10;
// Game
const signs = ['+', '-', '*'];
const getRandomItemArray = (arr) => (
  arr[getRandomNumber(0, arr.length - 1)]
);

const makeItUpSignsAndCalc = (num1, num2, sign) => {
  if (sign === '+') {
    return num1 + num2;
  }
  if (sign === '-') {
    return num1 - num2;
  }
  if (sign === '*') {
    return num1 * num2;
  }
  return console.log('Expected other sign');
};
const brainCalc = () => {
  const randomSing = getRandomItemArray(signs);
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);
  return [`${randomNumber1} ${randomSing} ${randomNumber2}`, makeItUpSignsAndCalc(randomNumber1, randomNumber2, randomSing)];
};

export default brainCalc;
