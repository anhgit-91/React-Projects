import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import ToggleVisibility from './Toggle';
import InputTracker from './InputTracker';
import FullName from './MultipleVariables';
import LoginForm from './FormValidation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
    <ToggleVisibility/>
    <InputTracker/>
    <FullName/>
    <LoginForm/>
  </React.StrictMode>
);

