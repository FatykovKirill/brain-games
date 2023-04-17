import readlineSync from 'readline-sync';

const whatTheName = () => {
  const questionName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${questionName}`);
}

export default whatTheName;