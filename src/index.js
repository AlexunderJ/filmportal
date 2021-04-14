import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './components/MoviDatabase/reducers/reducer'

const store = createStore(reducer);


axios.interceptors.request.use(request =>{
    return request
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });
axios.interceptors.request.use(response =>{
    return response
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
