import React, { Component } from 'react';
import Header from './components/Static/header';
import Footer from './components/Static/footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navigation
                home={<Link to="/">Home</Link>}
                about={<Link to="/about">About</Link>}
                contact={<Link to="/contact">Contact</Link>}
            />
            <Route exact path="/"  render={props => (
                <React.Fragment>
                  <div>
                    <Header />
                    <p><strong>Home content</strong></p>
                  </div>
                </React.Fragment>
            )} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
