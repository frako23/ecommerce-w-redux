import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter } from "react-router-dom";
import { Home } from './Home';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Home />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
