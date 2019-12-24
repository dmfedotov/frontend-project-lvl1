import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const minNumber = 1;
const maxNumber = 20;

const getRandomOperation = (arr) => arr[Math.floor(Math.random() * arr.length)];

const calculateAnswer = (num, num2, operation) => {
  let answer;
  switch (operation) {
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
  const operation = getRandomOperation(operations);
  const question = `${number} ${operation} ${number2}`;
  const answer = calculateAnswer(number, number2, operation);

  return cons(question, answer);
};

const startGame = () => buildGame(description, generateQuestion);

export default startGame;
