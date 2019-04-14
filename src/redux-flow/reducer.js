import { ADD_ANSWER, CHECK_ANSWER } from './actions';

const initialState = {
  answers: [],
  isQuizFinished: false,
  isVerified: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state,
        answers: action.payload.answers,
        isQuizFinished: true,
      };
    case CHECK_ANSWER:
      return {
        ...state,
        answers: action.payload.answers,
        isVerified: true,
      };
    default:
      return state;
  }
};

export default reducer;
