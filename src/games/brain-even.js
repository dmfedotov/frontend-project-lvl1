const RULES = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const getRandomNum = (start, end) => Math.round(Math.random() * (end - start) + start);
const generateQuestion = () => getRandomNum(1, 100);
const calculateAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export {
  RULES,
  generateQuestion,
  calculateAnswer,
  getRandomNum,
};
