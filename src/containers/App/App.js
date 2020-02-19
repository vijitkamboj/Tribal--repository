import React,{Component} from 'react';
import './App.css';
import {Button} from 'semantic-ui-react';
import firebase from "../../firebase";
import FileUplaod from "./FileUplaod";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";
import {removeLinks} from "../../actions/index"
//import UserPanel from "./UserPanel"


import {connect} from "react-redux"

class App extends Component {
    handleSignOut = () => {
        firebase.auth().signOut()
        this.props.removeLinks();
    }
  
    render(){
        return(
            <div>
                <Button onClick={this.handleSignOut} size="big" content="SignOut" color="brown" style={{margin:"10px"}} />
                <Link to="/home"><Button size="big" color="facebook" style={{margin:"10px",marginLeft:"auto"}} content="Home" /> </Link>
                <FileUplaod />
                {this.props.links?<ReactPlayer url={this.props.links[-1]} playing={false} controls onEnded={()=>this.props.removeLinks()}/>:null}
            </div>
        )
    }

}

const mapStateToProps = ({user,data}) => {
    return({
        currentUser: user.currentUser,
        
    })
} // providing global state to the component

export default connect(mapStateToProps,{removeLinks})(App);