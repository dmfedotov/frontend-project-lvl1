import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsAmount = 3;

const getQuestion = (question) => car(question);
const getAnswer = (question) => cdr(question);

const buildGame = (description, makeQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description, '\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 1; i <= roundsAmount; i += 1) {
    const questionAnswer = makeQuestionAnswer();
    console.log(`Question: ${getQuestion(questionAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === getAnswer(questionAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getAnswer(questionAnswer)}'.\nLet's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default buildGame;
