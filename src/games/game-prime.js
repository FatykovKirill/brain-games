import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const min = 1;
const max = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const randomNumber = getRandomNumber(min, max);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

// Settings
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  brainGame(rules, brainPrime);
};
