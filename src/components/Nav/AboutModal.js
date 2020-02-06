import React, { Component } from 'react';
import {Modal} from "semantic-ui-react"


class AboutModal extends Component {


    render(){
        return(
            <Modal basic open={this.props.modal} closeIcon onClose={this.props.closeModal} >

                    <Modal.Header 
                        icon="add" 
                        style={{
                            fontWeight:"lighter",
                            color: "rgb(226, 226, 226)",
                            border:"none",
                        }}
                    >
                        About
                    </Modal.Header>

                    <Modal.Content style={{border:"none",fontWeight:"lighter"}}>

                    The "Tribal Repository" is a unique digital repository related to Tribes in India, developed by Ministry of Tribal Affairs, Govt. of India.


                    The Ministry was set up in 1999 after the bifurcation of Ministry of Social Justice and Empowerment with the objective of providing more focused approach on the integrated socio-economic development of the Scheduled Tribes (STs), the most underprivileged of the Indian Society, in a coordinated and planned manner. Before the formation of the Ministry, tribal affairs were handled by different Ministries at different points in time.


                    The Ministry of Tribal Affairs is the Nodal Ministry for overall policy planning and coordination of programmes for development of STs. To this end, the Ministry has undertaken activities that follow under the subjects allocated in the Government of India (Allocation of Business) Rules, 1961 and amendment(s) thereafter.

                    </Modal.Content>

                    
                </Modal>
        )
    }
}


export default AboutModal