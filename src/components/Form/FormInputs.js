import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getIsQuizFinished, getIsFormCleared, getAnswers } from '../../redux-flow/selectors';

const FormInputs = ({ isQuizFinished, isFormCleared, answers }) => (
  <div>
    {!isQuizFinished || isFormCleared ? (
      <div>
        <h3>Quantos filmes a série Harry Potter tem?</h3>
        <input type="text" name="movies" />

        <h3>Qual é o nome do ator que interpreta Harry Potter?</h3>
        <input type="text" name="actor" />

        <h3>
          Harry Potter tinha um animal de estimação? Se sim, qual era o animal e seu respectivo
          nome?
        </h3>
        <input type="text" name="animal" />

        <h3>Como são chamados as pessoas que não são bruxos?</h3>
        <input type="text" name="muggles" />

        <h3>Como se chama a namorada de Harry Potter?</h3>
        <input type="text" name="girlfriend" />
      </div>
    ) : (
      <div>
        <h3>Quantos filmes a série Harry Potter tem?</h3>
        <input type="text" name="movies" />
        {answers.includes(7) ? '' : <p className="correct-answer">Resposta: 7</p>}

        <h3>Qual é o nome do ator que interpreta Harry Potter?</h3>
        <input type="text" name="actor" />
        {answers.includes('Daniel Radcliffe') ? (
          ''
        ) : (
          <p className="correct-answer">Resposta: Daniel Radcliffe</p>
        )}

        <h3>
          Harry Potter tinha um animal de estimação? Se sim, qual era o animal e seu respectivo
          nome?
        </h3>
        <input type="text" name="animal" />
        {answers.includes('Edwiges') ? '' : <p className="correct-answer">Resposta: Edwiges</p>}

        <h3>Como são chamados as pessoas que não são bruxos?</h3>
        <input type="text" name="muggles" />
        {answers.includes('Trouxas') ? '' : <p className="correct-answer">Resposta: Trouxas</p>}

        <h3>Como se chama a namorada de Harry Potter?</h3>
        <input type="text" name="girlfriend" />
        {answers.includes('Gina Weasley') ? (
          ''
        ) : (
          <p className="correct-answer">Resposta: Gina Weasley</p>
        )}
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  answers: getAnswers(state),
  isFormCleared: getIsFormCleared(state),
  isQuizFinished: getIsQuizFinished(state),
});

FormInputs.propTypes = {
  isQuizFinished: PropTypes.bool.isRequired,
  isFormCleared: PropTypes.bool.isRequired,
  answers: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(FormInputs);
