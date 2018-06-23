import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from '../Home';
import * as routes from '../constants/routes';
import './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="App-main">
            <Route exact
              path={routes.HOME}
              component={() => (
                <Home />
              )}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
