import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const home = () => {
  return <div>Home</div>;
}

const streams = () => {
  return <div>Streams</div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={home} />
              <Route path="/streams" exact component={streams} />

            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
