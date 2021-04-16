/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import api from './api/index.js';

class App extends React.Component {
  testAPI() {
    api.reviewsGETtest();
    api.questionsGETtest();
    api.productGETtest();
  }

  render() {
    return (
      <div>
        <span className="header">
          <h1>Project Catwalk</h1>
        </span>
        <div>
          <button className="button" type="submit" aria-label="get data" onClick={this.testAPI}>TEST API</button>
        </div>
      </div>
    );
  }
}

export default App;
