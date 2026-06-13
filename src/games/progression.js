import runGame from '../index.js';


const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getProgression = (start, step, count) => {
  const result = [];

  for (let i = 0; i < count; i += 1) {
    result.push(start + i * step);
  }

  return result;
};

const getRoundData = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const count = 10;

  const progression = getProgression(start, step, count);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(description, getRoundData);