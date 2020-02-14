import React,{Component} from 'react';
import './Home.css';

import {connect} from "react-redux";
import {fetchLinks} from "../../actions/index"
 import ImageBox from "./ImageBox"


class Photos extends Component {
    state={
        links:null
    }
    componentDidUpdate(prevProps){
        if (prevProps.links !== this.props.links){
            this.setState({
                links:this.props.links
            })
        }
    }
   
    componentDidMount(){

        this.setState({
            links:this.props.links
        })
    }
	render(){
 
		return(
			<div className="section" >
                <div className ="home-heading-cont">
                    <div className="home-heading">
                            Photos
                    </div>
                </div>
                <div id="photos">
                    
                    {this.state.links !== null ? this.state.links.map(link => <ImageBox link={link}/>) : null}
                    
                </div>
            </div>
		) 

	}
}
const mapStateToProps = (state) => ({
    links: state.data.links
})


export default connect(mapStateToProps,{fetchLinks})(Photos);