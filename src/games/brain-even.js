import { cons } from '@hexlet/pairs';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const getRandomNum = (start, end) => Math.round(Math.random() * (end - start) + start);
const calculateAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');
const generateQuestion = () => {
  const question = getRandomNum(1, 100);
  const answer = calculateAnswer(question);

  return cons(question, answer);
};

export { RULES, generateQuestion, getRandomNum };
