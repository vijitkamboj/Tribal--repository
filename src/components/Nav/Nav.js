import React,{Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import AboutModal from "./AboutModal";
import {Dropdown} from "semantic-ui-react"


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
    dropDownOptions =()=>{
    
        return(
          [
              {   
                  key:"category",
                  text:<a href="#photos"><span>Photos</span></a>,
              },
              {   
                key:"category1",
                text:<a href="#videos"><span>Videos</span></a>,
            },
            {   
                key:"category2",
                text:<a href="#audio"><span>Music</span></a>,
            },
            {   
                key:"category3",
                text:<a href="#documents"><span>Documents</span></a>,
            },
            {   
                key:"category4",
                text:<a href="#photos"><span>Sports</span></a>,
            }
          ]
        )
      }
      
    render(){
        return(
            <div id="nav">
            <div className="navbtn"><Link to="/home" className='links'>Home</Link></div>
            <div className="navbtn" onClick={this.openModal}><Link to="/home" className='links' >About</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>Contact Us</Link></div>
            
            {this.props.currentUser !==null ? null: <div className="navbtn"><Link to="/login" className='links'>Login</Link></div>}
            {this.props.currentUser ===null ? null: <div className="navbtn"><Link to="/app" className='links'>Dashboard</Link></div>}
            <AboutModal modal={this.state.modal} closeModal={this.closeModal}/>
        </div>
        )
    }
}


export default Nav;