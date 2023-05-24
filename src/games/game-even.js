import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const min = 1;
const max = 100;

// Game
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const brainEven = () => {
  const randomNumber = getRandomNumber(min, max);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

// Settings
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  brainGame(rules, brainEven);
};
