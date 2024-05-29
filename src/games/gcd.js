import game from "../index.js";

import { getRandomNumber } from "../index.js";

const description = "Find the greatest common divisor of given numbers.";
const gcd = (a, b) => {
  if (a < b) {
    [a, b] = [b, a];
  }
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};
const getQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestionAnswer);
};
