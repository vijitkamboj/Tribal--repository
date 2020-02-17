import React,{Component} from 'react';
import '../Home.css';

import {connect} from "react-redux";
import {fetchLinks} from "../../../actions/index"
 import ImageBox from "./ImageBox"


class Photos extends Component {
    state={
        links:null
    }
    componentDidUpdate(prevProps){
        if (prevProps.links.image !== this.props.links.image){
            this.setState({
                links:this.props.links.image
            })
        }
    }
   
    componentDidMount(){

        this.setState({
            links:this.props.links.image
        })
    }
	render(){
 
		return(
			<div className="section" >
                <div className ="home-heading-cont">
                    <div className="home-heading">
                            PHOTOS
                    </div>
                </div>
                <div className="sub-sec" id="photos">
                    
                    {this.state.links !== null ? this.state.links.map((link,i) => <ImageBox link={link.eurl} key={i}/>) : null}
                    
                </div>
            </div>
		) 

	}
}
const mapStateToProps = (state) => ({
    links: state.data.links
})


export default connect(mapStateToProps,{fetchLinks})(Photos);