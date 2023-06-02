import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

// Settings
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const brainEven = () => {
  const minNumber = 1;
  const maxNumber = 100;

  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export default () => {
  brainGame(rules, brainEven);
};
