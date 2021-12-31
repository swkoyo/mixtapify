import React, { Component, Fragment } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import './album.css';
import { Container, Icon, Grid, Image, Header, Table } from 'semantic-ui-react';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 1,
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

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ volume: this.audioElement.volume })
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  setRestToSongIndex(song) {
    this.state.album.songs.map(songInArr => {
      if (songInArr !== song) {
        this.showSongIndex(this.getButtons(this.state.album.songs.indexOf(songInArr)));
      }
	  return;
    });
  }

  formatTime(time) {
    // CHECK TO SEE IF TIME IS A NUMBER
    if (isNaN(time)) {
      return "-:--";
    }

    const minutes = Math.trunc(time / 60);
    let seconds = (time / 60) - Math.trunc(time / 60);
    seconds = Math.trunc(seconds * 60);

    if (seconds < 10) { seconds = "0" + seconds };

    return minutes + ":" + seconds;
  }

  getIndexOfSong(song) {
    return this.state.album.songs.indexOf(song);
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

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    this.audioElement.volume = e.target.value;
    this.setState({ volume: this.audioElement.volume });
  }

  handlePrevClick() {
    const currentIndex = this.getIndexOfSong(this.state.currentSong);
    //DO NOTHING IF THERE ARE NO MORE PREVIOUS SONGS
    if (currentIndex === 0) {
      return;
    }
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);

    //CHANGE ALL OTHER SONG ICONS TO SONG INDEX
    this.setRestToSongIndex(newSong);

    // CHANGE ICON OF NEW SONG TO PAUSE BUTTON
    this.showPauseBtn(this.getButtons(newIndex));

    this.play();
  }

  handleNextClick() {
    const currentIndex = this.getIndexOfSong(this.state.currentSong);
    //DO NOTHING IF CURRENT SONG IS LAST SONG
    if (currentIndex === 4) {
      return;
    }
    const newIndex = Math.min(4, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);

    //CHANGE ALL OTHER SONG ICONS TO SONG INDEX
    this.setRestToSongIndex(newSong);

    // CHANGE ICON OF NEW SONG TO PAUSE BUTTON
    this.showPauseBtn(this.getButtons(newIndex));

    this.play();
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    const currentIndex = this.getIndexOfSong(song)
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
      this.setRestToSongIndex(song);

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
      // <section className="album">
      //   <section id="album-info">
      //     <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
      //     <div className="album-details">
      //       <h1 id="album-title">{this.state.album.title}</h1>
      //       <h2 className="artist">{this.state.album.artist}</h2>
      //       <div id="release-info">{this.state.album.releaseInfo}</div>
      //     </div>
      //   </section>
      //   <table id="song-list">
      //     <colgroup>
      //       <col id="song-number-column" />
      //       <col id="song-title-column" />
      //       <col id="song-duration-column" />
      //     </colgroup>
      //     <tbody>
            // {
            //   this.state.album.songs.map( (song, index) =>
                // <tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleEnter(song, index)} onMouseLeave={() => this.handleLeave(song, index)} >
            //       <td><span className="songIndex" style={{display: 'inline'}}>{index + 1}</span><span className="playBtn" style={{display: 'none'}} ><i className="icon ion-md-play"></i></span><span className="pauseBtn" style={{display: 'none'}}><i className="icon ion-md-pause"></i></span></td>
            //       <td className="song-title">{song.title}</td>
            //       <td>{this.formatTime(song.duration)}</td>
            //     </tr>
            //   )
            // }
      //     </tbody>
      //   </table>
        // <PlayerBar
        //   isPlaying={this.state.isPlaying}
        //   currentSong={this.state.currentSong}
        //   currentTime={this.audioElement.currentTime}
        //   duration={this.audioElement.duration}
        //   volume={this.audioElement.volume}
        //   handleSongClick={() => this.handleSongClick(this.state.currentSong)}
        //   handlePrevClick={() => this.handlePrevClick()}
        //   handleNextClick={() => this.handleNextClick()}
        //   handleTimeChange={(e) => this.handleTimeChange(e)}
        //   handleVolumeChange={(e) => this.handleVolumeChange(e)}
        //   formatTime={(time) => this.formatTime(time)}
        // />
      // </section>
      <Fragment>
        <Container className='album'>
          <Grid columns={2}>
            <Grid.Column>
              <Image
                rounded
                src={this.state.album.albumCover}
                alt={this.state.album.title}
              />
            </Grid.Column>
            <Grid.Column>
              <Grid.Row
                style={{
                  'marginBottom': '100px'
                }}
              >
                <Header
                  as='h1'
                  style={{
                    'fontSize': '50px',
                    'textAlign': 'left',
                  }}
                >
                  <Header.Content>
                    {this.state.album.title}
                  </Header.Content>
                  <Header.Subheader>
                    <div>{this.state.album.artist}</div>
                    <div>{this.state.album.releaseInfo}</div>
                  </Header.Subheader>
                </Header>
              </Grid.Row>
              <Grid.Row
                style={{
                  'marginBottom': '100px'
                }}
              >
              <Table singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Track</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Length</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    this.state.album.songs.map( (song, index) =>
                      <Table.Row className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleEnter(song, index)} onMouseLeave={() => this.handleLeave(song, index)} >
                        <Table.Cell><span className='songIndex' style={{display: 'inline'}}>{index + 1}</span><Icon name='play' className="playBtn" style={{display: 'none'}}></Icon><Icon name='pause' className="pauseBtn" style={{display: 'none'}}></Icon></Table.Cell>
                        <Table.Cell>{song.title}</Table.Cell>
                        <Table.Cell>{this.formatTime(song.duration)}</Table.Cell>
                      </Table.Row>
                    )
                  }
                </Table.Body>
              </Table>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          volume={this.audioElement.volume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolumeChange={(e) => this.handleVolumeChange(e)}
          formatTime={(time) => this.formatTime(time)}
        />
      </Fragment>
    );
  }
}

export default Album;
