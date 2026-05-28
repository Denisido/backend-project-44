import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), correctAnswer];
};

const runEvenGame = () => {
  runGame(description, getRoundData);
};

export default runEvenGame;