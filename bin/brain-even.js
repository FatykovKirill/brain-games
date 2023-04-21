#!/usr/bin/env node
import readlineSync from 'readline-sync';
import salute from '../src/cli.js';
// Settings
const easy = 3;
const normal = 6;
const hard = 10;
const levels = ['easy', 'normal', 'hard'];
const minNumber = 1;
const maxNumber = 100;

const userName = salute();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const levelGame = readlineSync.keyInSelect(levels, 'Which level?');

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = (level) => {
  let maxQuestion;
  if (level === 'easy') {
    maxQuestion = easy;
  } else if (level === 'normal') {
    maxQuestion = normal;
  } else {
    maxQuestion = hard;
  }
  for (let i = 0; i < maxQuestion; i++) {
    const randomNumber = getRandomNumber(minNumber, maxNumber);
    console.log(`Question: ${randomNumber}`);
    const answerYesOrNo = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber);
    if (correctAnswer === answerYesOrNo && i === maxQuestion - 1) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}! Your score: ${i + 1}`);
    } else if (correctAnswer === answerYesOrNo) {
      console.log('Correct!');
    } else {
      console.log(`'${answerYesOrNo}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}. Your score: ${i}`);
      break;
    }
  }
};

brainEven(levels[levelGame]);
