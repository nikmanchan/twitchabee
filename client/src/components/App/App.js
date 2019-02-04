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
import StreamCreate from '../Streams/StreamCreate';
import StreamEdit from '../Streams/StreamEdit';
import StreamDelete from '../Streams/StreamDelete';
import StreamShow from '../Streams/StreamShow';

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
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit" exact component={StreamEdit} />
              <Route path="/streams/delete" exact component={StreamDelete} />
              <Route path="/streams/show" exact component={StreamShow} />

            </div>
          </Router>
      </div>
    );
  }
}

export default App;
