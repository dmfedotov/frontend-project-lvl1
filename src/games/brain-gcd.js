import { cons } from '@hexlet/pairs';
import { getRandomNum } from './brain-even';

const RULES = 'Find the greatest common divisor of given numbers.\n';

const getMax = (num, num2) => (num - num2 > 0 ? num : num2);
const getMin = (num, num2) => (num - num2 > 0 ? num2 : num);

const calculateAnswer = (num, num2) => {
  const maxNum = getMax(num, num2);
  const minNum = getMin(num, num2);

  const gcd = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return gcd(min, max % min);
  };

  return String(gcd(maxNum, minNum));
};

const generateQuestion = () => {
  const number = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const question = `${number} ${number2}`;
  const answer = calculateAnswer(number, number2);

  return cons(question, answer);
};

export { RULES, generateQuestion };
