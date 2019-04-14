import { ADD_ANSWER, CHECK_ANSWER } from './actions';
import { validateAnswer } from '../utils';

export const addAnswer = (...answers) => ({
  type: ADD_ANSWER,
  payload: { answers, isQuizFinished: true },
});

export const checkAnswer = (...answers) => ({
  type: CHECK_ANSWER,
  payload: { answers: validateAnswer(answers), isVerified: true },
});
