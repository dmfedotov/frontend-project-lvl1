import readlineSync from 'readline-sync';

const printGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const sayHelloToUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export { printGreeting, sayHelloToUser };
