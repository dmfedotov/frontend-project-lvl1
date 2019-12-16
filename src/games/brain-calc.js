import { cons } from '@hexlet/pairs';
import { getRandomNum } from './brain-even';

const rules = 'What is the result of the expression?\n';
const minNumber = 1;
const maxNumber = 20;
const signIndexBegin = 1;
const signIndexEnd = 3;

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
  const number = getRandomNum(minNumber, maxNumber);
  const number2 = getRandomNum(minNumber, maxNumber);
  const sign = getRandomSign(getRandomNum(signIndexBegin, signIndexEnd));
  const question = `${number} ${sign} ${number2}`;
  const answer = calculateAnswer(number, number2, sign);

  return cons(question, answer);
};

export { rules, generateQuestion };
