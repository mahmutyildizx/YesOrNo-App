import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from './styles'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
