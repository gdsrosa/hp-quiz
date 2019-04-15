import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsQuizFinished, getIsFormCleared } from '../../redux-flow/selectors';
import { resetQuiz } from '../../redux-flow/actions-creators';

const FormButtons = ({ isQuizFinished, restartQuiz, isFormCleared }) => (
  <div>
    {!isQuizFinished || isFormCleared ? (
      <button type="submit">Verificar respostas</button>
    ) : (
      <button id="play-again" type="button" onClick={restartQuiz}>
        Jogar Novamente
      </button>
    )}
  </div>
);

const mapStateToProps = state => ({
  isFormCleared: getIsFormCleared(state),
  isQuizFinished: getIsQuizFinished(state),
});

const mapDispatchToProps = dispatch => ({
  restartQuiz: () => dispatch(resetQuiz('quiz')),
});

FormButtons.propTypes = {
  isQuizFinished: PropTypes.bool.isRequired,
  isFormCleared: PropTypes.bool.isRequired,
  restartQuiz: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormButtons);
