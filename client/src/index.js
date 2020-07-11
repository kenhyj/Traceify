import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './redux';
import { ThemeProvider } from '@material-ui/core';
import theme from './MuiTheme';

axios.defaults.baseURL = 'http://localhost:7000';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
