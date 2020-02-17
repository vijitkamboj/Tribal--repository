import React,{Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import AboutModal from "./AboutModal";


class Nav extends Component {

    state = {
        modal:false,
    };

    openModal = () => {
        this.setState({
            modal: true
        })
    }
    closeModal = () => {
        this.setState({
            modal: false
        })
    }
   
      
    render(){
        return(
            <div id="nav">
            <div className="navbtn"><Link to="/home" className='links'>HOME</Link></div>
            <div className="navbtn" onClick={this.openModal}><Link to="/home" className='links' >ABOUT</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>CONTACT US</Link></div>
            
            {this.props.currentUser !==null ? null: <div className="navbtn"><Link to="/login" className='links'>LOGIN</Link></div>}
            {this.props.currentUser ===null ? null: <div className="navbtn"><Link to="/app" className='links'>DASHBOARD</Link></div>}
            <AboutModal modal={this.state.modal} closeModal={this.closeModal}/>
        </div>
        )
    }
}


export default Nav;