import readlineSync from 'readline-sync';

const brainGame = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n${rules}`);

  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, result] = game();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = result;
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
