import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import { Grid, Image, Header, Divider, Container, Card } from 'semantic-ui-react';
import './library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <Fragment>
        <Container className='library'>
          <Header
            size='huge'
            content='Our Selection'
            style={{
              'fontSize': '50px',
              'color': 'black',
              'marginBottom': '50px'
            }}
          />
          <Grid columns={4}>
            {
              this.state.albums.map( (album, index) =>
                <Grid.Column key={index}>
                  <Card>
                    <Image
                      className='album-image'
                      src={album.albumCover}
                      alt={album.title}
                      as={Link}
                      to={`/album/${album.slug}`}
                    />
                    <Card.Content>
                      <Card.Header
                        as={Link}
                        to={`/album/${album.slug}`}
                      >
                        {album.title}
                      </Card.Header>
                      <Card.Meta>
                        {album.artist}
                      </Card.Meta>
                      <Card.Description>{album.songs.length} songs</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            }
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default Library;
