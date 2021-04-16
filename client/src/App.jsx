/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import api from './api/index.js';

class App extends React.Component {
  testAPI() {
    api.getRequest(`${apiRoot}${reviewsEndp}${params}`);
    api.getRequest(`${apiRoot}${productsEndp}/18078/styles`);
    api.getRequest(`${apiRoot}/qa/questions/${params}`);
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
