import React from 'react';
import '../stylesheets/style.scss';
import '../static/castle.jpg';

const Quiz = () => (
  <div className="app">
    <h1>Teste seus conhecimentos sobre a saga Harry Potter</h1>
    <p>
      Neste quiz você irá responder 6 questões sobre o famoso bruxo cujo seus pais foram mortos por
      <em>Você sabe quem.</em>
    </p>

    <div className="questions">
      <h3>Quantos filmes a série Harry Potter tem?</h3>
      <input type="text" />

      <h3>Qual é o nome do ator que interpreta Harry Potter?</h3>
      <input type="text" />

      <h3>
        Harry Potter tinha um animal de estimação? Se sim, qual era o animal e seu respectivo nome?
      </h3>
      <input type="text" />

      <h3>Como são chamados as pessoas que não são bruxos?</h3>
      <input type="text" />

      <h3>Como se chama a namorada de Harry Potter?</h3>
      <input type="text" />

      <h3>Qual era o esporte praticado por Harry Potter?</h3>
      <input type="text" />
      <br />

      <button type="submit">Verificar respostas</button>
    </div>
  </div>
);

export default Quiz;
