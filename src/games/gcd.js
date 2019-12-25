import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const calculateAnswer = (num, num2) => {
  const maxNum = Math.max(num, num2);
  const minNum = Math.min(num, num2);

  const getGreatestCommonDivisor = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return getGreatestCommonDivisor(min, max % min);
  };

  return getGreatestCommonDivisor(maxNum, minNum);
};

const makeQuestionAnswer = () => {
  const number = getRandomNum(minNumber, maxNumber);
  const number2 = getRandomNum(minNumber, maxNumber);
  const question = `${number} ${number2}`;
  const answer = calculateAnswer(number, number2);

  return cons(question, answer);
};

const startGame = () => buildGame(description, makeQuestionAnswer);

export default startGame;
