import { cons } from '@hexlet/pairs';
import { getRandomNum } from './brain-even';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const calculateAnswer = (num) => {
  if (num < 2) return 'no';

  const sqrt = Math.round(Math.sqrt(num));
  for (let d = 2; d <= sqrt; d += 1) {
    if (num % d === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const generateQuestion = () => {
  const question = getRandomNum(1, 500);
  const answer = calculateAnswer(question);

  return cons(question, answer);
};

export { RULES, generateQuestion };
