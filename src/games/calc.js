import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const minNumber = 1;
const maxNumber = 20;
const beginOperationIndex = 0;
const endOperationIndex = operations.length - 1;

const getRandomOperation = (signs) => signs[getRandomNum(beginOperationIndex, endOperationIndex)];

const calculateAnswer = (num, num2, operation) => {
  let answer;
  switch (operation) {
    case '+':
      answer = num + num2;
      break;
    case '-':
      answer = num - num2;
      break;
    case '*':
      answer = num * num2;
      break;
    default: // Do nothing
  }

  return answer;
};

const makeQuestionAnswer = () => {
  const number = getRandomNum(minNumber, maxNumber);
  const number2 = getRandomNum(minNumber, maxNumber);
  const operation = getRandomOperation(operations);
  const question = `${number} ${operation} ${number2}`;
  const answer = calculateAnswer(number, number2, operation);

  return cons(question, answer);
};

const startGame = () => buildGame(description, makeQuestionAnswer);

export default startGame;
