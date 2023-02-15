import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persister=persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store}>
  <React.StrictMode>
    <PersistGate persistor={persister}>
    <App />
    </PersistGate>
  </React.StrictMode>
  </Provider>
);

