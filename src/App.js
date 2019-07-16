import React, { Component } from 'react'
import './App.css'
import NameElement from './nameElement';

class App extends Component {

  state  = {
    firstName: 'Harper',
    lastName: 'Perez'
  };


  render(){
    return (
      <div className="App">
        <p>Romain Bardet</p>
        <NameElement name={this.state} />
      </div>
    )
  }
}

export default App;
