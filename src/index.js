import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { reduxStore } from './Store/store';
import App from './App';
import GlobalStyles from './index.styles';

const {
  store,
} = reduxStore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
