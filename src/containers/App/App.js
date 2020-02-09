import React,{Component} from 'react';
import './App.css';
import {Button} from 'semantic-ui-react';
import firebase from "../../firebase";
import ImageUplaod from "./ImageUplaod";
//import UserPanel from "./UserPanel"


import {connect} from "react-redux"

class App extends Component {

    handleSignOut = () => {
        firebase.auth().signOut()
      
    }

    render(){
        return(
            <div>
                <Button onClick={this.handleSignOut} size="big" content="SignOut" color="brown" style={{margin:"10px"}}/>
                <ImageUplaod />

            </div>
        )
    }

}

const mapStateToProps = ({user}) => {
    return({
        currentUser: user.currentUser
    })
} // providing global state to the component

export default connect(mapStateToProps)(App);