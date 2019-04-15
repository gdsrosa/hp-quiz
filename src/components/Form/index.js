import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { checkAnswer, resetQuiz } from '../../redux-flow/actions-creators';
import {
  getIsQuizFinished,
  getIsFormCleared,
  getNumberOfRightAnswers,
  getAnswers,
} from '../../redux-flow/selectors';
import FormInputs from './FormInputs';

const Form = ({
  handleCheckAnswer,
  isQuizFinished,
  isFormCleared,
  numberOfCorrectAnswers,
  restartQuiz,
  answers,
}) => (
  <div className="questions">
    <form onSubmit={handleCheckAnswer} id="quiz">
      <FormInputs isQuizFinished={isQuizFinished} isFormCleared={isFormCleared} answers={answers} />
      <br />
      <div>{!isQuizFinished ? '' : `Você acertou ${numberOfCorrectAnswers}!`}</div>
      <br />
      <button className="verify-answer" type="submit">
        Verificar respostas
      </button>
    </form>

    {!isQuizFinished ? (
      ''
    ) : (
      <button className="play-again" type="button" onClick={restartQuiz}>
        Jogar Novamente
      </button>
    )}
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleCheckAnswer: (e) => {
    e.preventDefault();

    dispatch(
      checkAnswer(
        Number(e.target.movies.value),
        e.target.actor.value,
        e.target.animal.value,
        e.target.muggles.value,
        e.target.girlfriend.value,
      ),
    );
  },
  restartQuiz: () => dispatch(resetQuiz('quiz')),
});

const mapStateToProps = state => ({
  isQuizFinished: getIsQuizFinished(state),
  isFormCleared: getIsFormCleared(state),
  numberOfCorrectAnswers: getNumberOfRightAnswers(state),
  answers: getAnswers(state),
});

Form.propTypes = {
  handleCheckAnswer: PropTypes.func.isRequired,
  isQuizFinished: PropTypes.bool.isRequired,
  isFormCleared: PropTypes.bool.isRequired,
  numberOfCorrectAnswers: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
