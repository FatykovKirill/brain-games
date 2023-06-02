import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

// Game
const calculate = (num1, num2, sign) => {
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
  const signs = ['+', '-', '*'];
  const minNumber = 1;
  const maxNumber = 10;

  const randomSing = signs[getRandomNumber(0, signs.length - 1)];
  const randomNumber1 = getRandomNumber(minNumber, maxNumber);
  const randomNumber2 = getRandomNumber(minNumber, maxNumber);
  return [`${randomNumber1} ${randomSing} ${randomNumber2}`, String(calculate(randomNumber1, randomNumber2, randomSing))];
};

export default () => {
  brainGame(rules, brainCalc);
};
