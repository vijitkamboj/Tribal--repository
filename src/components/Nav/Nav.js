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
                <div id ="nav-logo">
            </div>
            <div className="navbtn"><Link to="/home" className='links'>Home</Link></div>
            <div className="navbtn" onClick={this.openModal}><Link to="/home#about" className='links' >About</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>Contact Us</Link></div>
            <Dropdown trigger={
                    <div className="navbtn"><Link to="/home" className='links'>Categories</Link></div>
                } >
                <Dropdown.Menu>
                <Dropdown.Item text='New' />
                <Dropdown.Item text='Open...' description='ctrl + o' />
                <Dropdown.Item text='Save as...' description='ctrl + s' />
                <Dropdown.Item text='Rename' description='ctrl + r' />
                <Dropdown.Item text='Make a copy' />
                <Dropdown.Item icon='folder' text='Move to folder' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Divider />
                <Dropdown.Item text='Download As...' />
                <Dropdown.Item text='Publish To Web' />
                <Dropdown.Item text='E-mail Collaborators' />
                </Dropdown.Menu>
            </Dropdown>
            {this.props.currentUser !==null ? null: <div className="navbtn"><Link to="/login" className='links'>Login</Link></div>}
            {this.props.currentUser ===null ? null: <div className="navbtn"><Link to="/app" className='links'>Dashboard</Link></div>}
            <AboutModal modal={this.state.modal} closeModal={this.closeModal}/>
        </div>
        )
    }
}


export default Nav;