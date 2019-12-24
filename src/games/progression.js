import { cons } from '@hexlet/pairs';
import buildGame from '..';
import getRandomNum from '../util';

const rules = 'What number is missing in the progression?';
const progressionLength = 11;
const minNumber = 1;
const maxNumber = 10;

const generateQuestion = () => {
  const missingPosition = getRandomNum(minNumber, maxNumber);
  const progressionStep = getRandomNum(minNumber, maxNumber);
  const initNumber = getRandomNum(minNumber, maxNumber);

  const progression = '';
  let answer;

  const makeProgression = (counter, acc) => {
    if (counter === progressionLength) {
      return acc.trim();
    }
    if (counter === missingPosition) {
      answer = String(initNumber + progressionStep * (counter - 1));
      return makeProgression(counter + 1, `${acc} ..`);
    }
    return makeProgression(counter + 1, `${acc} ${initNumber + progressionStep * (counter - 1)}`);
  };

  const question = makeProgression(1, progression);

  return cons(question, answer);
};

const startGame = () => buildGame(rules, generateQuestion);

export default startGame;
