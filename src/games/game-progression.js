import brainGame from '../index.js';
import getRandomNumber from '../utils.js';
// Settings
const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  const firstNumber = getRandomNumber(1, 100);
  const progressionNumber = getRandomNumber(1, 10);

  const array = [];
  let sum = firstNumber;
  const arrayLength = 10;
  for (let i = 0; i < arrayLength; i += 1) {
    array.push(sum);
    sum += progressionNumber;
  }

  const randomIndex = getRandomNumber(0, array.length - 1);

  const changeOneItemArray = (arr) => {
    const newArr = [...arr];
    newArr[randomIndex] = '..';
    return newArr;
  };

  return [changeOneItemArray(array).join(' '), String(array[randomIndex])];
};

export default () => {
  brainGame(rules, brainProgression);
};
