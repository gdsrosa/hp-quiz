import { CHECK_ANSWER, RESET_QUIZ } from './actions';

export const initialState = {
  answers: [],
  isQuizFinished: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ANSWER:
      return {
        ...state,
        answers: action.payload.answers,
        isQuizFinished: action.payload.isQuizFinished,
      };
    case RESET_QUIZ:
      return {
        ...state,
        isQuizFinished: action.payload.isQuizFinished,
      };
    default:
      return state;
  }
};

export default reducer;
