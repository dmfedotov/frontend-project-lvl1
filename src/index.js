import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const ROUNDS = 3;

const getQuestion = (question) => car(question);
const getAnswer = (question) => cdr(question);

const buildGame = (rules, genQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules, '\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 1; i <= ROUNDS; i += 1) {
    const question = genQuestion();
    console.log(`Question: ${getQuestion(question)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === getAnswer(question)) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getAnswer(question)}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default buildGame;
