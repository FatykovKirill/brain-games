import { getRandomNumber } from '../index.js';

const brainProgression = () => {
  const firstNumber = getRandomNumber(1, 100);
  const progressionNumber = getRandomNumber(1, 10);

  const array = [];
  let sum = firstNumber;
  for (let i = 0; i < 10; i += 1) {
    array.push(sum);
    sum += progressionNumber;
  }

  const randomIndex = getRandomNumber(0, array.length - 1);

  const changeOneItemArray = (arr) => {
    const newArr = [...arr];
    newArr[randomIndex] = '..';
    return newArr;
  };

  return [changeOneItemArray(array).join(' '), array[randomIndex]];
};

export default brainProgression;
