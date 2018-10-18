import React from 'react';
import ReactDOM from 'react-dom';

import {
  Calculator
} from './pages';

const App = () => {
  return (
    <main>
      <Calculator />
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);