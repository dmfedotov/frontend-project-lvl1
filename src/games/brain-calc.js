import { cons } from '@hexlet/pairs';
import { getRandomNum } from './brain-even';

const RULES = 'What is the result of the expression?\n';

const getRandomSign = (num) => {
  let sign;

  switch (num) {
    case 1:
      sign = '+';
      break;
    case 2:
      sign = '-';
      break;
    case 3:
      sign = '*';
      break;
    default: // Do nothing
  }

  return sign;
};

const calculateAnswer = (num, num2, sign) => {
  let answer;
  switch (sign) {
    case '+':
      answer = String(num + num2);
      break;
    case '-':
      answer = String(num - num2);
      break;
    case '*':
      answer = String(num * num2);
      break;
    default: // Do nothing
  }

  return answer;
};

const generateQuestion = () => {
  const number = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  const sign = getRandomSign(getRandomNum(1, 3));
  const question = `${number} ${sign} ${number2}`;
  const answer = calculateAnswer(number, number2, sign);

  return cons(question, answer);
};

export { RULES, generateQuestion };
