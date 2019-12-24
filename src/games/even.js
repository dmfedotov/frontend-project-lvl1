import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isEven = (num) => num % 2 === 0;
const generateQuestion = () => {
  const question = getRandomNum(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const startGame = () => buildGame(description, generateQuestion);

export default startGame;
