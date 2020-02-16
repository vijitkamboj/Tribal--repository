import React,{Component} from 'react';
import './Home.css';



class ImageBox extends Component {
    
	render(){
		return(
           <div className="imageBox">
                <div className="imageCont">
				<img src={this.props.link} className="Image" alt="image1" />
				</div>
           </div>
		)

	}
}

export default (ImageBox);