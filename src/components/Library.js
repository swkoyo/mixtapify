import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
              <div className="album-library">
                <Link to={`/album/${album.slug}`} key={index}>
                  <img className="album-photo" src={album.albumCover} alt={album.title} />
                  <div className="album-description">
                    <div className="title">{album.title}</div>
                    <div className="artist">{album.artist}</div>
                    <div className="length">{album.songs.length} songs</div>
                  </div>
                </Link>
              </div>
          )
        }
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
