#!/usr/bin/env node
import readlineSync from 'readline-sync';
import salute from '../src/cli.js';
// Settings
const easy = 3;
const normal = 6;
const hard = 10;
const levels = ['easy', 'normal', 'hard'];
const minNumber = 1;
const maxNumber = 10;

const userName = salute();
console.log('What is the result of the expression?');
const levelGame = readlineSync.keyInSelect(levels, 'Which level?');

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const signs = ['+', '-', '*'];
const getRandomItemArray = (arr) => (
  arr[getRandomNumber(0, arr.length - 1)]
);
const makeItUpSignsAndCalc = (num1, num2, sign) => {
  if (sign === '+') {
    return num1 + num2;
  }
  if (sign === '-') {
    return num1 - num2;
  }
  if (sign === '*') {
    return num1 * num2;
  }
  return console.log('Expected other sign');
};

const brainCalc = (level) => {
  let maxQuestion;
  if (level === 'easy') {
    maxQuestion = easy;
  } else if (level === 'normal') {
    maxQuestion = normal;
  } else {
    maxQuestion = hard;
  }
  for (let i = 0; i < maxQuestion; i++) {
    const randomSing = getRandomItemArray(signs);
    const randomNumber1 = getRandomNumber(minNumber, maxNumber);
    const randomNumber2 = getRandomNumber(minNumber, maxNumber);
    console.log(`Question: ${randomNumber1} ${randomSing} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = makeItUpSignsAndCalc(randomNumber1, randomNumber2, randomSing);
    if (correctAnswer === +answer && i === maxQuestion - 1) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}! Your score: ${i + 1}`);
    } else if (correctAnswer === +answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}. Your score: ${i}`);
      break;
    }
  }
};

brainCalc(levels[levelGame]);
