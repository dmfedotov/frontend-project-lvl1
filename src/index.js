import readlineSync from 'readline-sync';

// brain-games logic
const printGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => readlineSync.question('May I have your name? ');

const sayHelloToUser = (name) => {
  console.log(`Hello, ${name}\n`);
};

// brain-even logic
const printRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
};

const getRandomNum = () => Math.floor(Math.random() * 101);

const isRightAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const startGame = () => {
  const AMOUNT_OF_QUESTIONS = 3;
  const userName = getUserName();
  sayHelloToUser(userName);

  for (let i = 1; i <= AMOUNT_OF_QUESTIONS; i += 1) {
    const number = getRandomNum();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const rightAnswer = isRightAnswer(number);

    if (userAnswer === rightAnswer) {
      console.log(`Your answer: ${userAnswer}\nCorrect!`);
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export {
  printGreeting,
  getUserName,
  sayHelloToUser,
  printRules,
  startGame,
};
