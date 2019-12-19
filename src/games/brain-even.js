import { cons } from '@hexlet/pairs';
import getRandomNum from '../util';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const minNumber = 1;
const maxNumber = 100;

const calculateAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');
const generateQuestion = () => {
  const question = getRandomNum(minNumber, maxNumber);
  const answer = calculateAnswer(question);

  return cons(question, answer);
};

export { rules, generateQuestion };
