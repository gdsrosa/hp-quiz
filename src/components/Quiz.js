import React from 'react';
import '../stylesheets/style.scss';
import '../static/castle.jpg';

import Questions from './Questions';
import Instructions from './Instructions';

const Quiz = () => (
  <div className="app">
    <Instructions />
    <Questions />
  </div>
);

export default Quiz;
