import game from "../index.js";

const description = 'What is the result of the expression?';

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  };
  const getQuestionAnswer = () => {
  const question = getRandomNumber(1, 100) + ' ' + getRandomOperator() + ' ' + getRandomNumber(1, 100);
  const correctAnswer = eval(question).toString();
  return [question, correctAnswer];
  };
  
  export default () => {
    game(description, getQuestionAnswer);
  };