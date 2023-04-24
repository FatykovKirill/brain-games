import { getRandomNumber } from '../index.js';

const min = 1;
const max = 100;

// Game
const getGreatestCommonDiviosor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 === 1 || num2 === 1) {
    return 1;
  }
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return 2 * getGreatestCommonDiviosor(num1 / 2, num2 / 2);
  }
  if (num1 % 2 === 0 && num2 % 2 !== 0) {
    return getGreatestCommonDiviosor(num1 / 2, num2);
  }
  if (num1 % 2 !== 0 && num2 % 2 === 0) {
    return getGreatestCommonDiviosor(num1, num2 / 2);
  }
  if (num1 % 2 !== 0 && num2 % 2 !== 0 && num1 < num2) {
    return getGreatestCommonDiviosor(num1, (num2 - num1) / 2);
  }
  if (num1 % 2 !== 0 && num2 % 2 !== 0 && num1 > num2) {
    return getGreatestCommonDiviosor((num1 - num2) / 2, num2);
  }
  return console.log('Expected other sign');
};

const brainGcd = () => {
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);
  return [`${randomNumber1} ${randomNumber2}`, getGreatestCommonDiviosor(randomNumber1, randomNumber2)];
};

export default brainGcd;
