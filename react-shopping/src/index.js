import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';


import Database from './Constructor/Database';
import Apps from './Constructor/Apps';
import { LoginClassComponent } from './Constructor/LoginClassComponent';
import { LoginClassComponentConstructor } from './Constructor/LoginConstructor';
import { FakestoreClass } from './Constructor/FakestoreClass';
import { LifeCycleDemo, LoginComponent } from './Constructor/LoginComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<LifeCycleDemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
