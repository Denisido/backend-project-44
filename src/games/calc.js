import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(operators.length)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRoundData = () => {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const runCalcGame = () => {
  runGame(description, getRoundData);
};

export default runCalcGame;