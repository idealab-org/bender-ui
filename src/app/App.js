import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './query/query.js'
import './grid/grid.js'

class App extends Component {

  click() {
    //RETURN THE SELECTION TO SERVER 
  }

  render() {
    return (
      <div className="Bender">
        <Query query={} />
        <Grid grid={} handler={this.}
      </div>
    );
  }
}

export default App;