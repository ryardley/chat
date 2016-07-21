import hello from '../../lib/hello';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h3>{hello('Dingback')}</h3>, document.querySelector('#main'));
