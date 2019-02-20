import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Button, Input, Grid, Card, Image } from 'semantic-ui-react';
import './landing.css';

const Landing = () => (
  // <section className="landing">
  //   <section className="mainSection">
  //     <h1>Welcome to Bloc Jams!</h1>
  //     <h4>Sign-up for a new account</h4>
  //     <form>
  //       <Input className="email" type="email" placeholder="Enter email address" />
  //       <Button>Click Here</Button>
  //     </form>
  //     <Link className="mainLibraryLink" to='/library'>Browse Our Selection!</Link>
  //   </section>
  //   <section className="selling-points">
  //     <h1>Mixtapify gives you instant access to millions of songs – from old favorites to the latest hits. Just hit play to stream anything you like.</h1>
  //     <div className="points">
  //       <div className="point">
  //         <img src="/assets/images/selection.png" alt="Music Selection" />
  //         <h2 className="point-title">Choose your music</h2>
  //         <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
  //       </div>
  //       <div className="point">
  //         <img src="/assets/images/listening.png" alt="Music Streaming"></img>
  //         <h2 className="point-title">Unlimited streaming, ad-free</h2>
  //         <p className="point-description"> No arbitrary limits. No distractions.</p>
  //       </div>
  //       <div className="point">
  //         <img src="/assets/images/mobile.png" alt="Mobile Music"></img>
  //         <h2 className="point-title">Mobile enabled</h2>
  //         <p className="point-description">Listen to your music on the go. This streaming service is avaliable on all mobile platforms.</p>
  //       </div>
  //     </div>
  //   </section>
  //   <footer className="landing-footer">
  //     <Link to='/'><img className="logo-photo" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams Logo"></img></Link>
  //     <a href="#"><i className="fab fa-facebook-square"></i></a>
  //     <a href="#"><i className="fab fa-twitter-square"></i></a>
  //     <a href="#"><i className="fab fa-linkedin"></i></a>
  //     <a href="#"><i className="fab fa-instagram"></i></a>
  //   </footer>
  // </section>
  <Fragment>
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <h1>Welcome to Bloc Jams!</h1>
          <h4>Sign-up for a new account</h4>
          <form>
            <Input className="email" type="email" placeholder="Enter email address" />
            <Button>Click Here</Button>
          </form>
          <Link className="mainLibraryLink" to='/library'>Browse Our Selection!</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Card fluid>
              <Image src="/assets/images/selection.png" alt="Music Selection" />
              <Card.Content>
                <Card.Header>Choose your music</Card.Header>
                <Card.Description>The world is full of music; why should you have to listen to music that someone else chose?</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Image src="/assets/images/selection.png" alt="Music Selection" />
              <Card.Content>
                <Card.Header>Choose your music</Card.Header>
                <Card.Description>The world is full of music; why should you have to listen to music that someone else chose?</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Image src="/assets/images/selection.png" alt="Music Selection" />
              <Card.Content>
                <Card.Header>Choose your music</Card.Header>
                <Card.Description>The world is full of music; why should you have to listen to music that someone else chose?</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Fragment>
);

export default Landing;
