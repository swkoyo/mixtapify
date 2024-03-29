import React, { Component, Fragment } from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import './playerBar.css';

class PlayerBar extends Component {
  render() {
    return (
      // <section className="player-bar">
      //   <section id="buttons">
      //     <button id="previous" onClick={this.props.handlePrevClick}>
      //       <span className="ion-md-skip-backward"></span>
      //     </button>
      //     <button id="play-pause" onClick={this.props.handleSongClick} >
      //       <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}></span>
      //     </button>
      //     <button id="next" onClick={this.props.handleNextClick}>
      //       <span className="ion-md-skip-forward"></span>
      //     </button>
      //   </section>
      //   <section id="time-control">
      //     <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
      //     <input
      //       type="range"
      //       className="time-seek-bar"
      //       value={(this.props.currentTime / this.props.duration) || 0}
      //       max="1"
      //       min="0"
      //       step="0.01"
      //       onChange={this.props.handleTimeChange}
      //     />
      //     <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
      //   </section>
      //   <section id="volume-control">
      //     <div className="icon ion-md-volume-low"></div>
      //     <input
      //       type="range"
      //       className="volume-seek-bar"
      //       value={this.props.volume}
      //       max="1"
      //       min="0"
      //       step="0.1"
      //       onChange={this.props.handleVolumeChange}
      //     />
      //     <div className="icon ion-md-volume-high"></div>
      //   </section>
      // </section>

      <Fragment>
        {/* <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-md-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-md-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="time-seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-md-volume-low"></div>
          <input
            type="range"
            className="volume-seek-bar"
            value={this.props.volume}
            max="1"
            min="0"
            step="0.1"
            onChange={this.props.handleVolumeChange}
          />
          <div className="icon ion-md-volume-high"></div>
        </section> */}
        <Menu
          fixed='bottom'
          size='large'
          inverted
          fluid
        >
          <Container>
            <Menu.Item
              onClick={this.props.handlePrevClick}
            >
              <Icon name='backward'></Icon>
            </Menu.Item>
            <Menu.Item
              onClick={this.props.handleSongClick}
            >
              <Icon name={this.props.isPlaying ? 'pause' : 'play'}></Icon>
            </Menu.Item>
            <Menu.Item
              onClick={this.props.handleNextClick}
            >
              <Icon name='forward'></Icon>
            </Menu.Item>
            <Menu.Item
              centered={"true"}
              style={{
                'margin': '0 auto'
              }}
            >
              <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
              <input
                type="range"
                className="time-seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
              />
              <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
            </Menu.Item>
            <Menu.Item
              position='right'
            >
              <div className="icon ion-md-volume-low"></div>
              <input
                type="range"
                className="volume-seek-bar"
                value={this.props.volume}
                max="1"
                min="0"
                step="0.1"
                onChange={this.props.handleVolumeChange}
              />
              <div className="icon ion-md-volume-high"></div>
            </Menu.Item>
          </Container>
        </Menu>
      </Fragment>
    );
  }
}

export default PlayerBar;
