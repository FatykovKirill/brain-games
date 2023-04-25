import { getRandomNumber } from '../index.js';

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
  let yesOrNo;
  if (isPrime(randomNumber)) {
    yesOrNo = 'yes';
  } else {
    yesOrNo = 'no';
  }
  return [randomNumber, yesOrNo];
};

export default brainPrime;
