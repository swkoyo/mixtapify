import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import './landing.css';

const Landing = () => (
  <section className="landing">
    <section className="mainSection">
      <h1>Welcome to Bloc Jams!</h1>
      <h4>Sign-up for a new account</h4>
      <form>
        <Input className="email" type="email" placeholder="Enter email address" />
        <Button>Click Here</Button>
      </form>
      <Link className="mainLibraryLink" to='/library'>Browse Our Selection!</Link>
    </section>
    <section className="selling-points">
      <h1>Mixtapify gives you instant access to millions of songs – from old favorites to the latest hits. Just hit play to stream anything you like.</h1>
      <div className="points">
        <div className="point">
          <img src="/assets/images/selection.png" alt="Music Selection" />
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="point">
          <img src="/assets/images/listening.png" alt="Music Streaming"></img>
          <h2 className="point-title">Unlimited streaming, ad-free</h2>
          <p className="point-description"> No arbitrary limits. No distractions.</p>
        </div>
        <div className="point">
          <img src="/assets/images/mobile.png" alt="Mobile Music"></img>
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">Listen to your music on the go. This streaming service is avaliable on all mobile platforms.</p>
        </div>
      </div>
    </section>
    <footer className="landing-footer">
      <Link to='/'><img className="logo-photo" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams Logo"></img></Link>
      <a href="#"><i className="fab fa-facebook-square"></i></a>
      <a href="#"><i className="fab fa-twitter-square"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </footer>
  </section>
);

export default Landing;
