import game from "../index.js";

import { getRandomNumber } from "../utils.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const question = getRandomNumber(1, 20);
  const correctAnswer = isPrime(question) ? "yes" : "no";
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAnswer);
};
