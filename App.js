import React, { Component } from 'react';
import App from './navigation/app';
import store from './redux/store';
import { Provider } from 'react-redux';

export default class deneme extends Component {

  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
  );
  }
}