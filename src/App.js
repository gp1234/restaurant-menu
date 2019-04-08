import React, { Component } from 'react';
import MenuBuilder from './containers/MenuBuilder/MenuBuilder'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <h1>Vegan Menu</h1>
          <hr/>
          <MenuBuilder />
      </div>
    );
  }
}

export default App;
