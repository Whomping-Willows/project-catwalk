/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { ApiProvider } from './contexts/api.context.jsx';
import API from './components/API.jsx';

const App = () => (
  <ApiProvider>
    <div>
      <div className="header">
        <h1>Project Catwalk</h1>
      </div>
      <API />
    </div>
  </ApiProvider>
);

export default App;
