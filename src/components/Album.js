import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

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

  getButtons(index) {
    let btns = {
      songIndex: document.querySelectorAll(".songIndex")[index],
      playBtn: document.querySelectorAll(".playBtn")[index],
      pauseBtn: document.querySelectorAll(".pauseBtn")[index]
    }
    return btns;
  }

  showPlayBtn(obj) {
    obj.songIndex.style.display = 'none';
    obj.playBtn.style.display = 'inline';
    obj.pauseBtn.style.display = 'none';
  }

  showPauseBtn(obj) {
    obj.songIndex.style.display = 'none';
    obj.playBtn.style.display = 'none';
    obj.pauseBtn.style.display = 'inline';
  }

  showSongIndex(obj) {
    obj.songIndex.style.display = 'inline';
    obj.playBtn.style.display = 'none';
    obj.pauseBtn.style.display = 'none';
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);

    //CHANGE ALL OTHER SONG ICONS TO SONG INDEX
    this.state.album.songs.map(songInArr => {
      if (songInArr !== newSong) {
        this.showSongIndex(this.getButtons(this.state.album.songs.indexOf(songInArr)));
      }
    });

    // CHANGE ICON OF NEW SONG TO PAUSE BUTTON
    this.showPauseBtn(this.getButtons(newIndex));

    this.play();
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    const currentIndex = this.state.album.songs.indexOf(song);
    const buttons = this.getButtons(currentIndex);

    if (isSameSong) {
      if (this.state.isPlaying) { //IF CLICKED SONG IS THE CURRENT SONG AND PLAYING, ON CLICK, PAUSE THE SONG AND CHANGE ICON TO PLAY BUTTON
        this.showPlayBtn(buttons);
        this.pause();
      } else if (!this.state.isPlaying) { //IF CLICKED SONG IS CURRENT SONG AND PAUSED, ON CLICK, PLAY THE SONG AND CHANGE ICON TO PAUSE BUTTON
        this.showPauseBtn(buttons);
        this.play();
      }
    } else { //IF CLICKED SONG ISN'T THE CURRENT SONG, IT WILL NEVER BE PLAYING
      this.setSong(song); //SET CURRENT SONG TO NEW, CLICKED SONG

      //CHANGE ALL OTHER SONG ICONS TO SONG INDEX
      this.state.album.songs.map(songInArr => {
        if (songInArr !== song) {
          this.showSongIndex(this.getButtons(this.state.album.songs.indexOf(songInArr)));
        }
      });

      // CHANGE ICON OF THE CLICKED, NEW CURRENT SONG TO PAUSE BUTTON
      this.showPauseBtn(buttons);
      this.play();
    }
  }

  handleEnter(song, index) {
    //WE ONLY NEED TO HANDLE MOUSE ENTER AND LEAVE FOR SONGS THAT ARE NOT THE CURRENT SONG, SINCE handleSongClick() CHANGES ICONS OF CURRENT SONGS ON CLICK
    const isSameSong = this.state.currentSong === song;
    const buttons = this.getButtons(index);
    //IF HOVERING OVER A SONG THAT ISN'T PLAYING, CHANGE THE ICON TO A PLAY BUTTON
    if (!isSameSong) {
      this.showPlayBtn(buttons);
    }
  }

  handleLeave(song, index) {
    const isSameSong = this.state.currentSong === song;
    const buttons = this.getButtons(index);
    //WHEN LEAVING A SONG THAT ISN'T PLAYING, CHANGE THE ICON TO THE SONG INDEX
    if (!isSameSong) {
      this.showSongIndex(buttons);
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
                <tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleEnter(song, index)} onMouseLeave={() => this.handleLeave(song, index)} >
                  <td><span className="songIndex" style={{display: 'inline'}}>{index + 1}</span><span className="playBtn" style={{display: 'none'}} ><i className="icon ion-md-play"></i></span><span className="pauseBtn" style={{display: 'none'}}><i className="icon ion-md-pause"></i></span></td>
                  <td>{song.title}</td>
                  <td>{song.duration}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
        />
      </section>
    );
  }
}

export default Album;
