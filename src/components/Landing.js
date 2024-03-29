import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Grid, Card, Image, Header } from 'semantic-ui-react';
import './landing.css';

const Landing = () => (
  <Fragment>
    <Container
      fluid
      style={{
        'backgroundImage': 'url("/assets/images/background-image.jpeg")',
        'backgroundPosition': 'center',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'height': '40em',
        'paddingTop': '100px',
      }}>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header
              size='huge'
              content='Welcome to Mixtapify!'
              style={{
                'fontSize': '50px',
                'color': 'white',
              }}
            />
            {/* <Header as='h3'>Sign-up for a new account</Header>
            <form>
              <Input className="email" type="email" placeholder="Enter email address" />
              <Button>Click Here</Button>
            </form> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{'marginTop': '75px'}}>
          <Grid.Column>
            <Button circular color='teal' as={Link} to='/library'>Browse Our Selection!</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Container style={{
      'paddingBottom': '100px',
      'paddingTop': '50px'
    }}>
      <Grid columns={3} stretched>
        <Grid.Row>
          <Header
            as='h3'
            content='Mixtapify gives you instant access to millions of songs – from old favorites to the latest hits. Just hit play to stream anything you like.'
            style={{
              'fontSize': '20px',
              'height': '50px'
            }}
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card fluid style={{
              'border': 'none'
            }}>
              <Image style={{'height': '300px'}} src="/assets/images/selection.png" alt="Music Selection" />
              <Card.Content>
                <Card.Header>Choose your music</Card.Header>
                <Card.Description>The world is full of music; why should you have to listen to music that someone else chose?</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Image style={{'height': '300px'}} src="/assets/images/listening.png" alt="Music Streaming" />
              <Card.Content>
                <Card.Header>Unlimited streaming, ad-free</Card.Header>
                <Card.Description>No arbitrary limits. No distractions.</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Image style={{'height': '300px'}} src="/assets/images/mobile.png" alt="Mobile Music" />
              <Card.Content>
                <Card.Header>Choose your music</Card.Header>
                <Card.Description>Listen to your music on the go. This streaming service is avaliable on all mobile platforms.</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Fragment>
);

export default Landing;
