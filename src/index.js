import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsAmount = 3;

const buildGame = (description, makeQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description, '\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 1; i <= roundsAmount; i += 1) {
    const questionAnswer = makeQuestionAnswer();
    const question = car(questionAnswer);
    const answer = cdr(questionAnswer);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default buildGame;
