import game from '../index.js';

import { getRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';
const calc = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};
const getQuestionAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomIndex];

  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calc(num1, num2, operator).toString();

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAnswer);
};
