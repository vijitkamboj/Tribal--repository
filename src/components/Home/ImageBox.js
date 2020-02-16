import React,{Component} from 'react';
import './Home.css';



class ImageBox extends Component {
    
	render(){
		return(
           <div className="imageBox" style={{backgroundImage:`url(${this.props.link})`}}>
            
           </div>
		)
	}
}

export default (ImageBox);