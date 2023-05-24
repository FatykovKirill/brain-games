import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const min = 1;
const max = 100;

// Game
const getGreatestCommonDiviosor = (a, b) => {
  let num1 = a;
  let num2 = b;
  if (num1 === 0) {
    return num2;
  }
  while (num2 !== 0) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const brainGcd = () => {
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);
  return [`${randomNumber1} ${randomNumber2}`, getGreatestCommonDiviosor(randomNumber1, randomNumber2)];
};

// Settings
const rules = 'Find the greatest common divisor of given numbers.';

export default () => {
  brainGame(rules, brainGcd);
};
