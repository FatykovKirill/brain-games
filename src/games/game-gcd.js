import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

// Settings
const rules = 'Find the greatest common divisor of given numbers.';

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
  const minNumber = 1;
  const maxNumber = 100;

  const randomNumber1 = getRandomNumber(minNumber, maxNumber);
  const randomNumber2 = getRandomNumber(minNumber, maxNumber);
  return [`${randomNumber1} ${randomNumber2}`, String(getGreatestCommonDiviosor(randomNumber1, randomNumber2))];
};

export default () => {
  brainGame(rules, brainGcd);
};
