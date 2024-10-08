import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import ToggleVisibility from './Toggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
    <ToggleVisibility/>
  </React.StrictMode>
);

