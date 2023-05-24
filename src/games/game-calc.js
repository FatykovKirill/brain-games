import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const min = 1;
const max = 10;
// Game
const signs = ['+', '-', '*'];
const getRandomItemArray = (arr) => (
  arr[getRandomNumber(0, arr.length - 1)]
);

const makeItUpSignsAndCalc = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Expected other sign: '${sign}'!`);
  }
};
const brainCalc = () => {
  const randomSing = getRandomItemArray(signs);
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);
  return [`${randomNumber1} ${randomSing} ${randomNumber2}`, makeItUpSignsAndCalc(randomNumber1, randomNumber2, randomSing)];
};

const rules = 'What is the result of the expression?';

export default () => {
  brainGame(rules, brainCalc);
};
