import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <span className="header">
          <h1>Project Catwalk</h1>
        </span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
