import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { checkAnswer } from '../../redux-flow/actions-creators';
import {
  getIsQuizFinished,
  getIsFormCleared,
  getNumberOfRightAnswers,
} from '../../redux-flow/selectors';
import FormInputs from './FormInputs';
import FormButtons from './FormButtons';

const Form = ({
  handleCheckAnswer, isQuizFinished, isFormCleared, numberOfCorrectAnswers,
}) => (
  <div className="questions">
    <form onSubmit={handleCheckAnswer} id="quiz">
      <FormInputs />
      <br />
      <div>{!isQuizFinished || isFormCleared ? '' : `Você acertou ${numberOfCorrectAnswers}!`}</div>
      <br />
      <FormButtons />
    </form>
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
});

const mapStateToProps = state => ({
  isQuizFinished: getIsQuizFinished(state),
  isFormCleared: getIsFormCleared(state),
  numberOfCorrectAnswers: getNumberOfRightAnswers(state),
});

Form.propTypes = {
  handleCheckAnswer: PropTypes.func.isRequired,
  isQuizFinished: PropTypes.bool.isRequired,
  isFormCleared: PropTypes.bool.isRequired,
  numberOfCorrectAnswers: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
