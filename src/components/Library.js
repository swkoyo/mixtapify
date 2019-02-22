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
          <Grid columns={4}>
            {
              this.state.albums.map( (album, index) =>
                <Grid.Column>
                  <Card key={index}>
                    <Image
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
                    {/* <Card.Content extra>
                    </Card.Content> */}
                  </Card>
                  {/* <div className="album-library">
                    <Link to={`/album/${album.slug}`} key={index}>
                      <Image
                        className="album-image"
                        src={album.albumCover}
                        alt={album.title}
                        size='medium'
                        target='_blank'
                        rounded
                      />
                    </Link>
                    <Header as='h2' className="album-description">
                      <Link to={`/album/${album.slug}`} key={index}>
                        <div className="title">{album.title}</div>
                      </Link>
                      <Divider />
                      <Header.Subheader>
                        {album.artist}
                        <br></br>
                        {album.songs.length} songs
                      </Header.Subheader>
                    </Header>
                  </div> */}
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
