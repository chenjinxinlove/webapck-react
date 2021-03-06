import * as React from 'react';
import './App.scss';

const logo = require('./logo.svg');


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: '0'
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        </div>
        <div>
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default App;
