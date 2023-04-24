import { getRandomNumber } from '../index.js';

const min = 1;
const max = 100;

// Game
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const randomNumber = getRandomNumber(min, max);
  return [randomNumber, isEven(randomNumber)];
};

export default brainEven;
