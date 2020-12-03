import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import App from './routes';
import './assets/main.scss';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Container maxWidth="lg">
      <App />
    </Container>
  </Provider>,
  document.getElementById('app')
);
