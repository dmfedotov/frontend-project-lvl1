import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const rules = 'Find the greatest common divisor of given numbers.\n';
const minNumber = 1;
const maxNumber = 100;

const calculateAnswer = (num, num2) => {
  const maxNum = Math.max(num, num2);
  const minNum = Math.min(num, num2);

  const greatestCommonDivisor = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return greatestCommonDivisor(min, max % min);
  };

  return String(greatestCommonDivisor(maxNum, minNum));
};

const generateQuestion = () => {
  const number = getRandomNum(minNumber, maxNumber);
  const number2 = getRandomNum(minNumber, maxNumber);
  const question = `${number} ${number2}`;
  const answer = calculateAnswer(number, number2);

  return cons(question, answer);
};

const startGame = () => buildGame(rules, generateQuestion);

export default startGame;