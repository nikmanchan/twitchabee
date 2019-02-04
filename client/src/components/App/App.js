import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Streams from '../Streams/Streams';

const home = () => {
  return <h2>Home</h2>;
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
          <Router>
            <div>
              <Route path="/" exact component={home} />
              <Route path="/streams" exact component={Streams} />

            </div>
          </Router>
      </div>
    );
  }
}

export default App;
