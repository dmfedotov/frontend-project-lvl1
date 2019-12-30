import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const minNumber = 1;

const generateQuestion = (initNum, step, missed, counter, acc) => {
  if (counter > progressionLength) {
    return acc.trim();
  }
  if (counter === missed) {
    return generateQuestion(initNum, step, missed, counter + 1, `${acc} ..`);
  }
  return generateQuestion(initNum, step, missed, counter + 1, `${acc} ${initNum + step * (counter - 1)}`);
};

const makeQuestionAnswer = () => {
  const missingPosition = getRandomNum(minNumber, progressionLength);
  const progressionStep = getRandomNum(minNumber, progressionLength);
  const initNumber = getRandomNum(minNumber, progressionLength);
  const question = generateQuestion(initNumber, progressionStep, missingPosition, 1, '');
  const answer = String(initNumber + progressionStep * (missingPosition - 1));

  return cons(question, answer);
};

const startGame = () => buildGame(description, makeQuestionAnswer);

export default startGame;
