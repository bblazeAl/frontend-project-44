import game from "../index.js";

import { getRandomNumber } from "../index.js";

const description = "What is the result of the expression?";
const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};
const getQuestionAnswer = () => {
  const question =
    getRandomNumber(1, 100) +
    " " +
    getRandomOperator() +
    " " +
    getRandomNumber(1, 100);
  const correctAnswer = eval(question).toString();
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAnswer);
};
