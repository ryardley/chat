/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import hello from './hello';

export default class App extends Component {
  render() {
    return <h3>{hello('World!')}</h3>;
  }
}
