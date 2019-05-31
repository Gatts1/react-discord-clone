import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Login from './Login/index';

function Index() {
  const isLoggin = true;
  if (isLoggin) {
    return <App />;
  }
  return <Login />;
}

const $root = document.getElementById('root');
render(<Index />, $root);
