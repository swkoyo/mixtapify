import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: [],
      isPlaying: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song, index) {
    const isSameSong = this.state.currentSong === song;
    const playBtn = document.querySelectorAll(".playBtn");
    const pauseBtn = document.querySelectorAll(".pauseBtn");
    const songIndex = document.querySelectorAll(".songIndex");
    const currPlayBtn = document.querySelectorAll(".playBtn")[index];
    const currPauseBtn = document.querySelectorAll(".pauseBtn")[index];
    const currSongIndex = document.querySelectorAll(".songIndex")[index];
    if (isSameSong) {
      if (this.state.isPlaying) { //IF CLICKED SONG IS THE CURRENT SONG AND PLAYING, ON CLICK, PAUSE THE SONG AND CHANGE ICON TO PLAY BUTTON
        currPlayBtn.style.display = 'inline';
        currPauseBtn.style.display = 'none';
        currSongIndex.style.display = 'none';
        this.pause();
      } else if (!this.state.isPlaying) { //IF CLICKED SONG IS CURRENT SONG AND PAUSED, ON CLICK, PLAY THE SONG AND CHANGE ICON TO PAUSE BUTTON
        currPlayBtn.style.display = 'none';
        currPauseBtn.style.display = 'inline';
        currSongIndex.style.display = 'none';
        this.play();
      }
    } else { //IF CLICKED SONG ISN'T THE CURRENT SONG, IT WILL NEVER BE PLAYING
      this.setSong(song); //SET CURRENT SONG TO NEW, CLICKED SONG
      for (let i = 0; i < playBtn.length; i++) { //CHANGE ALL OTHER SONG ICONS TO SONG INDEX
        if (playBtn[i] !== currPlayBtn) {
          playBtn[i].style.display = 'none';
          pauseBtn[i].style.display = 'none';
          songIndex[i].style.display = 'inline';
        }
      }
      // CHANGE ICON OF THE CLICKED, NEW CURRENT SONG TO PAUSE BUTTON
      currPlayBtn.style.display = 'none';
      currPauseBtn.style.display = 'inline';
      currSongIndex.style.display = 'none';

      // playBtn.map(btn => {  // OUTPUTTING ERROR, CANT USE FILTER ON UNDEFINED
      //   if (btn !== currPlayBtn) {
      //     btn.style.display = 'none';
      //   }
      // })

      this.play();
    }
  }

  //WE ONLY NEED TO HANDLE MOUSE ENTER AND LEAVE FOR SONGS THAT ARE NOT THE CURRENT SONG, SINCE handleSongClick() CHANGES ICONS OF CURRENT SONGS ON CLICK
  handleEnter(song, index) {
    const isSameSong = this.state.currentSong === song;
    const playBtn = document.querySelectorAll(".playBtn")[index];
    const pauseBtn = document.querySelectorAll(".pauseBtn")[index];
    const songIndex = document.querySelectorAll(".songIndex")[index];
    //IF HOVERING OVER A SONG THAT ISN'T PLAYING, CHANGE THE ICON TO A PLAY BUTTON
    if (!isSameSong) {
      songIndex.style.display = 'none';
      playBtn.style.display = 'inline';
      pauseBtn.style.display = 'none';
    }
  }

  handleLeave(song, index) {
    const isSameSong = this.state.currentSong === song;
    const playBtn = document.querySelectorAll(".playBtn")[index];
    const pauseBtn = document.querySelectorAll(".pauseBtn")[index];
    const songIndex = document.querySelectorAll(".songIndex")[index];
    //WHEN LEAVING A SONG THAT ISN'T PLAYING, CHANGE THE ICON TO THE SONG INDEX
    if (!isSameSong) {
      songIndex.style.display = 'inline';
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'none';
    }
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {
              this.state.album.songs.map( (song, index) =>
                <tr className="song" key={index} onClick={() => this.handleSongClick(song, index)} onMouseEnter={() => this.handleEnter(song, index)} onMouseLeave={() => this.handleLeave(song, index)} >
                  <td><span className="songIndex" style={{display: 'inline'}}>{index + 1}</span><span className="playBtn" style={{display: 'none'}} ><i className="icon ion-md-play"></i></span><span className="pauseBtn" style={{display: 'none'}}><i className="icon ion-md-pause"></i></span></td>
                  <td>{song.title}</td>
                  <td>{song.duration}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </section>
    );
  }
}

export default Album;
