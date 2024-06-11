import game from '../index.js';

import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};
const getQuestionAnswer = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);

  const progression = getProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  const progressionForDisplay = [...progression];
  progressionForDisplay[hiddenIndex] = '..';

  const question = progressionForDisplay.join(' ');
  const correctAnswer = progression[hiddenIndex].toString();

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAnswer);
};
