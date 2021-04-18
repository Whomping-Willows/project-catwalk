/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import api from './api/requests.js';
import end from './api/endpoints.js';
import Reviews from './components/review/Reviews.jsx';

class App extends React.Component {
  testAPI() {
    api.getRequest(`${end.root}${end.listProducts}`);
    api.getRequest(`${end.root}${end.listInfo}`);
    api.getRequest(`${end.root}${end.productStyles}`);
    api.getRequest(`${end.root}${end.relatedProducts}`);
    api.getRequest(`${end.root}${end.reviews}`);
    api.getRequest(`${end.root}${end.reviewsMeta}`);
    api.getRequest(`${end.root}${end.listQuestions}`);
    api.getRequest(`${end.root}${end.answersList}`);
  }

  render() {
    return (
      <div>
        <span className="header">
          <h1>Project Catwalk</h1>
        </span>
        <div>
          <button className="button" id="testbutton" type="submit" aria-label="get data from API" onClick={this.testAPI}>TEST API</button>
          <Reviews />
        </div>
      </div>
    );
  }
}

export default App;
