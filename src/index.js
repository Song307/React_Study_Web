import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './mainSrc/Routing';
import Navigator from './mainSrc/Navigator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigator/>
    <Routing/>
  </React.StrictMode>
);

