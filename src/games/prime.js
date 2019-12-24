import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 500;

const calculateAnswer = (num) => {
  if (num < 2) return 'no';

  const sqrt = Math.round(Math.sqrt(num));

  for (let d = 2; d <= sqrt; d += 1) {
    if (num % d === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const generateQuestion = () => {
  const question = getRandomNum(minNumber, maxNumber);
  const answer = calculateAnswer(question);

  return cons(question, answer);
};

const startGame = () => buildGame(rules, generateQuestion);

export default startGame;
