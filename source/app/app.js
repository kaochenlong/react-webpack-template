import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Home from './components/home';
import About from './components/about';

class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Home } />
        <Route path="/about" component={ About } />
      </Router>
    );
  }
}

render(<App />, document.getElementById("app"));
