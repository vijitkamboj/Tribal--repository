import React,{Component} from 'react';
import './App.css';



import {connect} from "react-redux"

class App extends Component {

    componentWillMount(){
        if(!this.props.currentUser){
            this.props.history.go(0)
        }
    } // before the component is mounted , making sure that there is signedIn user , if not refresh the page so that it redirects to home

    // testing
    render(){
        return(
            <div>
                
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