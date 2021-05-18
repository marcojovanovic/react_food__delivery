import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FoodProvider } from './context';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
