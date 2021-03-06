import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import Home from './containers/Home/Home';
import Login from './containers/Auth/Login/Login';

import App from './containers/App/App';
import LoadingScreen from "./LoadingScreen"

import * as serviceWorker from './serviceWorker';


import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter as Router , Switch , Route ,withRouter} from 'react-router-dom';

import firebase from './firebase';

import {createStore} from 'redux';
import {Provider ,connect} from 'react-redux';
import rootReducer from "./reducers";
import {setUser,clearUser,fetchLinks} from "./actions/index"

const store = createStore( rootReducer , composeWithDevTools()) //created store for global state
   
class Root extends Component {

    state={
        Links: this.props.links
    }

    componentWillUnmount(){
        firebase.database().ref("image").off("child_added")
        firebase.database().ref("videos").off("child_added")
    }

    componentDidMount() {
        var Links = this.state.Links
        
        firebase
            .database()
            .ref("image")
            .on("child_added", (snapshot) => {
                Links.image.push({
                    url: `${snapshot.val().url}`,
                    eurl: `${snapshot.val().eurl}`
                })
                this.props.fetchLinks(Links);
            })
        firebase
            .database() 
            .ref("video")
            .on("child_added", (snapshot) => {
                Links.video.push({
                    url: `${snapshot.val().url}`
                })
                this.props.fetchLinks(Links);
            })
        firebase.auth().onAuthStateChanged(currentUser => {
            if (currentUser ) {
                this.props.setUser(currentUser)
                this.props.history.push("/app") // store user in global state and redirect user to Dashboard console
            }else {
                this.props.history.push("/home")
                this.props.clearUser() // redirects user to home page if there is no currently signed in user
            }
        })
        
    } 

    render(){
        document.body.className = 'none';
        return this.props.isLoading ? <LoadingScreen /> : (
            <Switch>
                <Route exact path ="/app" component = {App} />
                <Route path ="/home" component = {Home} currentUser={this.props.currentUser}/>
                <Route path ="/login" component = {Login} currentUser={this.props.currentUser}/>
            </Switch>
        ) 
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading,
    currentUser: state.user.currentUser,
    links: state.data.links
})


const RootWithAuth = withRouter(connect( mapStateToProps ,{setUser,clearUser,fetchLinks})(Root));  //connect (mapStateToProps , mapDispatchToProps)
// higher order component and pass isLoading state and setUser method as props to Root Componenet

ReactDOM.render(<Provider store = {store}><Router><RootWithAuth /></Router></Provider>, document.getElementById('root'));


serviceWorker.register();
