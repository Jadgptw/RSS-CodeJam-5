import React, { Component } from 'react';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video'

class Video extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
      }
    
      render(){
        const openModal = () => {
            this.setState({isOpen: true})
        }
        const { firstName, lastName, video } = this.props;
        const videoId = video.substring(video.indexOf('=')+1);
        return(
            <div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={videoId} onClose={() => this.setState({isOpen: false})} />
                <button onClick={openModal} className="member-page-show-video-button">{`Посмотреть видео с ${firstName} ${lastName}`}</button>
            </div>
        ) 
      }
}
export default Video;