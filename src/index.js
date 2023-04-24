import readlineSync from 'readline-sync';
import salute from './cli.js';

export const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const brainGame = (rules, game, easy = 3, normal = 6, hard = 10) => {
  const easyLevel = easy;
  const normalLevel = normal;
  const hardLevel = hard;
  const levels = ['easy', 'normal', 'hard'];

  const userName = salute();
  const levelGame = readlineSync.keyInSelect(levels, 'Which level?');
  console.log(rules);

  let maxQuestion;
  if (levels[levelGame] === 'easy') {
    maxQuestion = easyLevel;
  } else if (levels[levelGame] === 'normal') {
    maxQuestion = normalLevel;
  } else {
    maxQuestion = hardLevel;
  }
  for (let i = 0; i < maxQuestion; i++) {
    const [question, result] = game();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = String(result);
    if (correctAnswer === answerUser && i === maxQuestion - 1) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}! Your score: ${i + 1}`);
    } else if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName} Your score: ${i}`);
      break;
    }
  }
};

export default brainGame;
