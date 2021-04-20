/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import api from './api/requests.js';
import end from './api/endpoints.js';
import Product from './components/product/Product.jsx';
import Related from './components/related/Related.jsx';
import Question from './components/question/Question.jsx';
import Reviews from './components/review/Reviews.jsx';

class App extends React.Component {
  testAPI() {
    api.getRequest(`${end.listProducts}`);
    api.getRequest(`${end.listInfo}`);
    api.getRequest(`${end.productStyles}`);
    api.getRequest(`${end.relatedProducts}`);
    api.getRequest(`${end.reviews}`);
    api.getRequest(`${end.reviewsMeta}`);
    api.getRequest(`${end.listQuestions}`);
    api.getRequest(`${end.answersList}`);
  }

  render() {
    return (
      <div>
        <span className="header">
          <h1>Project Catwalk</h1>
        </span>
        <div className="appContainer">
          <button className="button" id="testbutton" type="submit" aria-label="get data from API" onClick={this.testAPI}>TEST API</button>
          <Product />
          <Related />
          <Question />
          <Reviews />
        </div>
      </div>
    );
  }
}

export default App;
