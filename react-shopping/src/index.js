import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { ClassPropertiesDemo } from './Component/ClassPropertieDemo';
import { ConditionalRender } from './Component/ConditionalRender';
import { FormDemo } from './Component/form-demo/FormDemo';
import ProgrammingLanguageDropdown from './Dropdown/ProgrammingLanguageDropdown';

import Dropdowns from './Dropdown/Dropdowns';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<FormDemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
