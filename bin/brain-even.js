#!/usr/bin/env node
import runEvenGame from '../src/games/even.js';

runEvenGame();

// import readlineSync from 'readline-sync'
// import { getUserName } from '../src/cli.js';

// console.log('Welcome to the Brain Games!');

// const userName = getUserName();
// console.log(`Hello, ${userName}!`);
// console.log('Answer "yes" if the number is even, otherwise answer "no".');

// const isEven = (num) => num % 2 === 0;
// const roundsToWin = 3;

// for (let round = 0; round < roundsToWin; round += 1) {
//   const question = Math.floor(Math.random() * 100) + 1;
//   console.log(`Question: ${question}`);
//   const answer = readlineSync.question('Your answer: ').trim().toLowerCase();

//   const correctAnswer = isEven(question) ? 'yes' : 'no';

//   if (answer !== correctAnswer) {
//     console.log(
//       `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
//     );
//     console.log(`Let's try again, ${userName}!`);
//     process.exit(1);
//   }

//   console.log('Correct!');
// }

// console.log(`Congratulations, ${userName}!`);