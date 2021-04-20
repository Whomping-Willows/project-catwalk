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
<<<<<<< HEAD
    // api.getRequest('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078');
    api.getRequest(`${end.root}${end.listProducts}`);
    api.getRequest(`${end.root}${end.listInfo}`);
    api.getRequest(`${end.root}${end.productStyles}`);
    api.getRequest(`${end.root}${end.relatedProducts}`);
    api.getRequest(`${end.root}${end.reviews}`);
    api.getRequest(`${end.root}${end.reviewsMeta}`);
    api.getRequest(`${end.root}${end.listQuestions}`);
    api.getRequest(`${end.root}${end.answersList}`);
=======
    api.getRequest(end.listProducts);
    api.getRequest(end.listInfo);
    api.getRequest(end.productStyles);
    api.getRequest(end.relatedProducts);
    api.getRequest(end.reviews);
    api.getRequest(end.reviewsMeta);
    api.getRequest(end.listQuestions);
    api.getRequest(end.answersList);
>>>>>>> 0554403a61591f1f3e03c2deeafd7ca6f52163ca
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
