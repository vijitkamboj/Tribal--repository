import React,{Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import AboutModal from "./AboutModal";


class Nav extends Component {

    state = {
        modal:false
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
                <div id ="nav-logo">
            </div>
            <div className="navbtn"><Link to="/home" className='links'>Home</Link></div>
            <div className="navbtn" onClick={this.openModal}><Link to="/home#about" className='links' >About</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>Contact Us</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>Categories</Link></div>
            {/* <div className="navbtn"><Link to="/home" className='links'>Dashboard</Link></div> */}
            <div className="navbtn"><Link to="/login" className='links'>Login</Link></div>
            <AboutModal modal={this.state.modal} closeModal={this.closeModal}/>
        </div>
        )
    }
}


export default Nav;