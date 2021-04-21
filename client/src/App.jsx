/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
// import api from './api/requests.js';
// import end from './api/endpoints.js';
import { ApiProvider } from './contexts/api.context.jsx';
import Stars from './components/Stars.jsx';

const App = () => (
  <ApiProvider>
    <div>
      <span className="header">
        <h1>Project Catwalk</h1>
      </span>
      <Stars />
    </div>
  </ApiProvider>
);

export default App;
