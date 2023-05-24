export const convertBooleanInAnswer = (func) => {
  let answer;
  if (func) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export default getRandomNumber;
