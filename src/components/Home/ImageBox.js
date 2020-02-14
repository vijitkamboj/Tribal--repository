import React,{Component} from 'react';
import './Home.css';
import {Image} from "semantic-ui-react"



class ImageBox extends Component {
    
	render(){
		return(
           <div className="imageBox">
                 <img src={this.props.link}  className="Image" />
           </div>
		)

	}
}

export default (ImageBox);