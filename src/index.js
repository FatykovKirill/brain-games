import readlineSync from 'readline-sync';
import salute from './cli.js';

export const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const brainGame = (rules, game) => {
  const userName = salute();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, result] = game();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = String(result);
    if (correctAnswer === answerUser && i === 2) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    } else if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default brainGame;
