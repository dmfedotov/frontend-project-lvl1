import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const ROUNDS = 3;

const printGreeting = () => console.log('Welcome to the Brain Games!');
const printRules = (rules) => console.log(rules);

const getUserName = () => readlineSync.question('May I have your name? ');
const sayHelloToUser = (name) => {
  console.log(`Hello, ${name}\n`);
};

const getQuestion = (question) => car(question);
const getAnswer = (question) => cdr(question);

const startGame = (rules, genQuestion) => {
  printGreeting();
  printRules(rules);

  const userName = getUserName();
  sayHelloToUser(userName);

  for (let i = 1; i <= ROUNDS; i += 1) {
    const question = genQuestion();
    const userAnswer = readlineSync.question(`Question: ${getQuestion(question)} `);

    if (userAnswer === getAnswer(question)) {
      console.log(`Your answer: ${userAnswer}\nCorrect!`);
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getAnswer(question)}.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export {
  printGreeting,
  getUserName,
  sayHelloToUser,
  startGame,
};
