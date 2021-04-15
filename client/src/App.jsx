import React from 'react';
import axios from 'axios';
import api from './api/index.js';


class App extends React.Component {
  testAPI() {
    api.reviewsGETtest();
    api.questionsGETtest();
  }

  render() {
    return (
      <div>
        <button onClick={this.testAPI} />
      </div>
    );
  }
}

export default App;
