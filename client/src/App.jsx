/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
// import api from './api/requests.js';
// import end from './api/endpoints.js';
import { ApiProvider } from './contexts/api.context.jsx';
import API from './components/API.jsx';

const App = () => (
  <ApiProvider>
    <div>
      <span className="header">
        <h1>Project Catwalk</h1>
      </span>
      <API />
    </div>
  </ApiProvider>
);

export default App;
