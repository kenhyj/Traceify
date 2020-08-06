import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './redux';
import theme from './MuiTheme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
