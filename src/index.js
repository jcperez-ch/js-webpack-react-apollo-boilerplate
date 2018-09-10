import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'reset-css/reset.css';

const renderApp = () => render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}

renderApp();
