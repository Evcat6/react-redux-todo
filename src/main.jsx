import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
