import React,{Component} from 'react';
import '../Home.css';
import ReactPlayer from "react-player"



class VideoBox extends Component {
	render () {
	  return (
		<div className='player-wrapper'>
		  <ReactPlayer
			className='react-player'
			url={this.props.url}
			width='100%'
			height='100%'
			playing={false}
			controls={true}
			
		  />
		</div>
	  )
	}
  }

export default (VideoBox);