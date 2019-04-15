import { CHECK_ANSWER, RESET_QUIZ } from './actions';
import { validateAnswer, clearFormInput } from '../utils';

export const resetQuiz = (formId) => {
  clearFormInput(formId);
  return {
    type: RESET_QUIZ,
    payload: {
      isQuizFinished: false,
    },
  };
};

export const checkAnswer = (...answers) => ({
  type: CHECK_ANSWER,
  payload: {
    answers: validateAnswer(answers),
    isQuizFinished: true,
  },
});
