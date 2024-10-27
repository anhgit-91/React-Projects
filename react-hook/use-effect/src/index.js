import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Initialization from './basic/Component-Initialization';
import DataFetch from './basic/DataFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Initialization /> */}
    <DataFetch />
  </React.StrictMode>
);

