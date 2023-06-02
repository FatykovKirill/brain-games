import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

// Settings
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const minNumber = 1;
  const maxNumber = 100;

  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export default () => {
  brainGame(rules, brainPrime);
};
