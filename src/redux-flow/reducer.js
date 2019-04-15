import { CHECK_ANSWER, RESET_QUIZ } from './actions';

const initialState = {
  answers: [],
  isQuizFinished: false,
  isVerified: false,
  isFormCleared: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ANSWER:
      return {
        ...state,
        answers: action.payload.answers,
        isVerified: action.payload.isVerified,
        isQuizFinished: action.payload.isQuizFinished,
      };
    case RESET_QUIZ:
      return {
        ...state,
        isFormCleared: action.payload.isFormCleared,
      };
    default:
      return state;
  }
};

export default reducer;
