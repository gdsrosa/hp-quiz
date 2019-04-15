import React from 'react';
import PropTypes from 'prop-types';

const FormInputs = ({ isQuizFinished, answers }) => (
  <div>
    <h3>Quantos filmes a série Harry Potter tem?</h3>
    <input type="text" name="movies" />
    {answers.includes(7) || !isQuizFinished ? '' : <p className="correct-answer">Resposta: 7</p>}

    <h3>Qual é o nome do ator que interpreta Harry Potter?</h3>
    <input type="text" name="actor" />
    {answers.includes('Daniel Radcliffe') || !isQuizFinished ? (
      ''
    ) : (
      <p className="correct-answer">Resposta: Daniel Radcliffe</p>
    )}

    <h3>
      Harry Potter tinha um animal de estimação? Se sim, qual era o animal e seu respectivo nome?
    </h3>
    <input type="text" name="animal" />
    {answers.includes('Edwiges') || !isQuizFinished ? (
      ''
    ) : (
      <p className="correct-answer">Resposta: Edwiges</p>
    )}

    <h3>Como são chamados as pessoas que não são bruxos?</h3>
    <input type="text" name="muggles" />
    {answers.includes('Trouxas') || !isQuizFinished ? (
      ''
    ) : (
      <p className="correct-answer">Resposta: Trouxas</p>
    )}

    <h3>Como se chama a namorada de Harry Potter?</h3>
    <input type="text" name="girlfriend" />
    {answers.includes('Gina Weasley') || !isQuizFinished ? (
      ''
    ) : (
      <p className="correct-answer">Resposta: Gina Weasley</p>
    )}
  </div>
);

FormInputs.propTypes = {
  isQuizFinished: PropTypes.bool.isRequired,
  answers: PropTypes.array.isRequired,
};

export default FormInputs;
