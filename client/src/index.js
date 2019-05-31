import React, { useState } from 'react';
import { render } from 'react-dom';
import App from './App';
import Login from './Login/index';

function Index() {
  const [user, setUser] = useLocalStorage('user', null);

  if (user) {
    return <App />;
  }
  return <Login setUser={setUser} />;
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const $root = document.getElementById('root');
render(<Index />, $root);
