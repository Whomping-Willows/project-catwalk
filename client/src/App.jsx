/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import api from './api/requests.js';
import end from './api/endpoints.js';

class App extends React.Component {
  testAPI() {
    api.getRequest(`${end.root}${end.productStyles}`);
    api.getRequest(`${end.root}${end.relatedProducts}`);
    api.getRequest(`${end.root}${productsEndp}/18078/styles`);
    api.getRequest(`${end.root}/qa/questions/${params}`);
  }

  render() {
    return (
      <div>
        <button type="submit" aria-label="get data from API" onClick={this.testAPI}>Test API</button>
      </div>
    );
  }
}

export default App;
