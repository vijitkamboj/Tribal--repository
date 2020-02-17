import React,{Component} from 'react';
import '../Home.css';
import VideoBox from "./VideoBox"
import {connect} from "react-redux"



class Videos extends Component {
    state={
        links:null
    }
    componentDidUpdate(prevProps){
        if (prevProps.links.video !== this.props.links.video){
            this.setState({
                links:this.props.links.video
            })
        }
    }
   
    componentDidMount(){

        this.setState({
            links:this.props.links.video
        })
    }
	render(){ 
 
		return(
			<div className="section" >
                <div className ="home-heading-cont">
                    <div className="home-heading">
                            Videos
                    </div>
                </div>
                <div className="sub-sec" id="videos">
                    
                    {this.state.links !== null ? this.state.links.map((link,i) => <VideoBox url={link.url} key={i}/>) : null}
                    
                </div>
            </div>
		) 

	}
}
const mapStateToProps = (state) => ({
    links: state.data.links
})


export default connect(mapStateToProps)(Videos);