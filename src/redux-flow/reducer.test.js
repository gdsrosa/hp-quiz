import deepFreeze from 'deep-freeze';
import { CHECK_ANSWER, RESET_QUIZ } from './actions';
import reducer, { initialState } from './reducer';

describe('Reducer suite test', () => {
  it('should check the answer', () => {
    const before = deepFreeze({
      answers: [],
      isQuizFinished: false,
    });

    const action = deepFreeze({
      type: CHECK_ANSWER,
      payload: {
        answers: [7, 'Daniel Radcliffe', 'Edwiges', 'Trouxas', 'Gina Weasley'],
        isQuizFinished: true,
      },
    });

    const after = {
      answers: [7, 'Daniel Radcliffe', 'Edwiges', 'Trouxas', 'Gina Weasley'],
      isQuizFinished: true,
    };

    expect(reducer(before, action)).toEqual(after);
  });

  it('should reset quiz', () => {
    const before = deepFreeze({
      answers: [],
      isQuizFinished: false,
    });

    const action = deepFreeze({
      type: RESET_QUIZ,
      payload: {
        isQuizFinished: false,
      },
    });

    const after = {
      answers: [],
      isQuizFinished: false,
    };

    expect(reducer(before, action)).toEqual(after);
  });

  it('should return if action is unknown', () => {
    const before = deepFreeze({
      answers: [7, 'Daniel Radcliffe', 'Edwiges', 'Trouxas', 'Gina Weasley'],
      isQuizFinished: false,
    });
    const action = deepFreeze({
      type: 'UNKNOWN',
    });
    const after = {
      answers: [7, 'Daniel Radcliffe', 'Edwiges', 'Trouxas', 'Gina Weasley'],
      isQuizFinished: false,
    };
    expect(reducer(before, action)).toEqual(after);
  });

  it('should return initialState if state is undefined', () => {
    const before = undefined;
    const action = deepFreeze({});
    const after = initialState;

    expect(reducer(before, action)).toEqual(after);
  });
});
