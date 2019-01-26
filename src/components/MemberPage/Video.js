import React, { Component } from 'react';
import YouTube from 'react-youtube'

class Video extends Component{
    render() {
        //this.props.video it's url of a youtube video
        const url = this.props.video;
        const videoId = url.substring(url.indexOf('=')+1);
        console.log(videoId);
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1
          }
        };
        return (
          <YouTube
            id='video' 
            videoId = {videoId}
            opts={opts}
            onReady={this._onReady}
          />
        );
      }
     
      _onReady(event) {
        event.target.pauseVideo();
      }
    }
export default Video;