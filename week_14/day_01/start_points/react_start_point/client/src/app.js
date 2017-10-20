import React from 'react';
import ReactDOM from 'react-dom';
import PiggyBank from './components/PiggyBank';

window.addEventListener('load', function () {
  ReactDOM.render(
    <PiggyBank title="Ben's Piggy Bank" amount={10}/>,
    document.getElementById('app')
  );
});