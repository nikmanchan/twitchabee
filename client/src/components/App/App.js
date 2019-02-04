import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const PageOne = () => {
  return <div>PageOne</div>;
}

const PageTwo = () => {
  return <div>PageTwo</div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={PageOne} />
              <Route path="/pagetwo" exact component={PageTwo} />

            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
