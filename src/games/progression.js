import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const minNumber = 1;

const getQuestionAnswer = () => {
  const missingPosition = getRandomNum(minNumber, progressionLength);
  const progressionStep = getRandomNum(minNumber, progressionLength);
  const initNumber = getRandomNum(minNumber, progressionLength);
  let answer;

  const generateQuestion = (counter, acc) => {
    if (counter > progressionLength) {
      return acc.trim();
    }
    if (counter === missingPosition) {
      answer = String(initNumber + progressionStep * (counter - 1));
      return generateQuestion(counter + 1, `${acc} ..`);
    }
    return generateQuestion(counter + 1, `${acc} ${initNumber + progressionStep * (counter - 1)}`);
  };

  const question = generateQuestion(1, '');

  return cons(question, answer);
};

const saveQuestionAnswer = () => {
  const questionAndAnswer = getQuestionAnswer();

  return questionAndAnswer;
};

const startGame = () => buildGame(description, saveQuestionAnswer);

export default startGame;
