import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
