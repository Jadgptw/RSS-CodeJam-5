import React, { Component } from 'react';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

class Video extends Component{
    constructor (props) {
        super(props)
        this.state = {
          isOpen: false
        }
      }
    
      render(){
        const openModal = () => {
            this.setState({isOpen: true})
        }
        // this.props.video it's url of a youtube video
        const url = this.props.video;
        const videoId = url.substring(url.indexOf('=')+1);
        console.log(videoId);
        return(
            <div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={videoId} onClose={() => this.setState({isOpen: false})} />
                <button onClick={openModal}>Open</button>
            </div>
        ) 
      }
}
export default Video;