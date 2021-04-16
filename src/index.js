import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootStore } from './store/rootStore';

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
  <Provider store={rootStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
