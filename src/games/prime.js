import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 500;

const isPrime = (num) => {
  if (num < 2) return false;

  const sqrt = Math.round(Math.sqrt(num));

  for (let d = 2; d <= sqrt; d += 1) {
    if (num % d === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestion = () => {
  const question = getRandomNum(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const startGame = () => buildGame(description, generateQuestion);

export default startGame;
