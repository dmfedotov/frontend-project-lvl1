import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

const ROUNDS = 3;

const printGreeting = () => console.log('Welcome to the Brain Games!');
const printRules = (rules) => console.log(rules);

const getUserName = () => readlineSync.question('May I have your name? ');
const sayHelloToUser = (name) => {
  console.log(`Hello, ${name}\n`);
};

const makeQuestion = (question, answer) => cons(question, answer);
const getQuestion = (question) => car(question);
const getAnswer = (question) => cdr(question);

const startGame = (rules, genQuestion, calcAnswer) => {
  printGreeting();
  printRules(rules);

  const userName = getUserName();
  sayHelloToUser(userName);

  for (let i = 1; i <= ROUNDS; i += 1) {
    const task = genQuestion();
    const question = makeQuestion(task, calcAnswer(task));
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
