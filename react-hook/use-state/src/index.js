import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import ToggleVisibility from './Toggle';
import InputTracker from './InputTracker';
import FullName from './MultipleVariables';
import LoginForm from './FormValidation';
import DelayedCounter from './DelayedCounter';
import ColorPicker from './ColorPicker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
    <ToggleVisibility/>
    <InputTracker/>
    <FullName/>
    <LoginForm/>
    <DelayedCounter/>
    <ColorPicker/>
  </React.StrictMode>
);

