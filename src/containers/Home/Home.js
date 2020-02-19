import React ,{Component} from 'react';
import './Home.css';
import Nav from '../Nav/Nav'
import HomeCover from "./Cover/HomeCover"

import Photos from './Photos/Photos';


import Videos from "./Videos/Videos";

import {connect} from "react-redux"


class Home extends Component {


	render(){
		document.body.className = "app-back"
		return(
			<div className="home">
				<Nav currentUser = {this.props.currentUser}/>
				<HomeCover/>
				{this.props.currentUser ? <Photos /> : null}
				{this.props.currentUser ? <Videos /> : null}
				
			</div>
		)

	}
}
const mapStateToProps = ({user}) => {
    return({
        currentUser: user.currentUser
    })
} // providing global state to the component

export default connect(mapStateToProps)(Home);
