import { cons } from '@hexlet/pairs';
import { getRandomNum } from './brain-even';

const RULES = 'What number is missing in the progression?\n';

const generateQuestion = () => {
  const LENGTH = 11;

  const missingPosition = getRandomNum(1, 10);
  const step = getRandomNum(1, LENGTH);
  const start = getRandomNum(1, LENGTH);

  const progression = '';
  let answer;

  const makeProgression = (counter, acc) => {
    if (counter === LENGTH) {
      return acc.trim();
    }
    if (counter === missingPosition) {
      answer = String(start + step * (counter - 1));
      return makeProgression(counter + 1, `${acc} ..`);
    }
    return makeProgression(counter + 1, `${acc} ${start + step * (counter - 1)}`);
  };

  const question = makeProgression(1, progression);

  return cons(question, answer);
};

export { RULES, generateQuestion };
