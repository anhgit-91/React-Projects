import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Initialization from './basic/Component-Initialization';
import DataFetch from './basic/DataFetch';
import UpdateState from './basic/UpdateState';
import LocalStorage from './basic/LocalStorage';
import Timer from './basic/Timer';
import SearchAPI from './advanced/SearchAPI';
import Array from './advanced/Array';
import ResizeListener from './advanced/ResizeListener';
import Toggle from './advanced/ToggleState';
import SynchronizedComponent from './advanced/SynczTabs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Initialization /> */}
    {/* <DataFetch /> */}
    {/* <UpdateState count={5}/> */}
    {/* <LocalStorage /> */}
    {/* <Timer /> */}
    {/* <SearchAPI /> */}
    {/* <Array /> */}
    {/* <ResizeListener /> */}
    {/* <Toggle /> */}
    <SynchronizedComponent />
  </React.StrictMode>
);

