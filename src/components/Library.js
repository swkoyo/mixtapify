import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import { Grid, Image, Header, Divider } from 'semantic-ui-react';
import './library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        <Grid container columns={4}>
          {
            this.state.albums.map( (album, index) =>
              <Grid.Column>
                <div className="album-library">
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
                </div>
              </Grid.Column>
            )
          }
        </Grid>
        <footer className="landing-footer">
          <Link to='/'><img className="logo-photo" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams Logo"></img></Link>
          <a href="#"><i className="fab fa-facebook-square"></i></a>
          <a href="#"><i className="fab fa-twitter-square"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </footer>
      </section>
    );
  }
}

export default Library;
