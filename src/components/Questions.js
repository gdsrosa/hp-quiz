/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Questions extends React.Component {
  render() {
    return (
      <div className="questions">
        <h3>Quantos filmes a série Harry Potter tem?</h3>
        <input type="text" name="movies" onChange={this.handleInputedAnswer} />

        <h3>Qual é o nome do ator que interpreta Harry Potter?</h3>
        <input type="text" />

        <h3>
          Harry Potter tinha um animal de estimação? Se sim, qual era o animal e seu respectivo
          nome?
        </h3>
        <input type="text" />

        <h3>Como são chamados as pessoas que não são bruxos?</h3>
        <input type="text" />

        <h3>Como se chama a namorada de Harry Potter?</h3>
        <input type="text" />

        <h3>Qual era o esporte praticado por Harry Potter?</h3>
        <input type="text" />
        <br />

        <button type="submit" onClick={() => console.log('submit')}>
          Verificar respostas
        </button>
      </div>
    );
  }
}

export default Questions;
