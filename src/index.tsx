import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import {AppThemeCustoms} from "./shared/theme/AppThemeCustoms";

import 'normalize.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AppThemeCustoms>
    <App />
  </AppThemeCustoms>
);
