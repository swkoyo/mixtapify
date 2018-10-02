import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="navbar">
            <ul>
              <li>
                <span id="logo"><Link to='/'><img className="logo-photo" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams Logo"></img></Link></span>
              </li>
              <ul id="navbar-links">
                <li>
                <Link className="homeLink" to='/'>Home</Link>
                </li>
                <li>
                  <Link className="libraryLink" to='/library'>Library</Link>
                </li>
                <li><hr></hr></li>
                <li>
                  <Link className="signup" to="#">Sign-Up</Link>
                </li>
                <li>
                  <Link className="login" to="#">Login</Link>
                </li>
              </ul>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
