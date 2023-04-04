import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import { FakestoreComponent } from './fakestoreapi/fakestore.component';
import { StyleBinding } from './style-binding/style-binding';
import { EventBinding } from './event-binding/event.binding';
import { EventBindingRest } from './event-binding/event.bindingRestpara';
import { EventBindingSpread } from './event-binding/spread';
import { PasswordStrengthMeter } from './Form/PasswordStrengthMeter';
import { KeyDemo } from './event-binding/keydemo';
import { UserNameDemo } from './Form/UserName';
import { RegUserDemo } from './Form/RegUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RegUserDemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
