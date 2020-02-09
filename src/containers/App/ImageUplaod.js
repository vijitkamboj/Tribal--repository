
import React, { Component } from "react";
import firebase from "../../firebase";
import "./ImageUpload.css";
import {Button,Progress} from "semantic-ui-react"
import {connect} from "react-redux";
import {fetchLinks} from "../../actions/index"

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      this.setState(() => ({ file }));
    }
  };

  handleUpload = () => {
    const {
      file
    } = this.state;
    const uploadTask = firebase.storage().ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({
          progress
        });
      },
      error => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL()
        .then(url => {
          const uploadDurlTask = firebase.storage().ref(`links/${file.name}`).putString(url);
          this.setState({url})
        })
      }
    );
  };
  render() {
    console.log(this.state.url);
    return (
          <div className="file-upload">
            <div className="image-upload-wrap">
              <input className="file-upload-input" type='file' onChange={this.handleChange} />
              <div className="drag-text">
                <h3>Drag and drop a file or select add Image</h3>
              </div>
            </div>
           
            <Button
              onClick={this.handleUpload}
              className="waves-effect waves-light btn"
              content ="Upload"
              size = "medium"
              style={{margin:"10px"}}
            />
            <div className="row">
            <Progress 
                percent={this.state.progress} 
                progress
                indicating
                inverted
                size="large"
                style = {{margin:"2px 0 0 0",padding:0}}
            />
            </div>
          </div>
      
    );
  }
}

export default connect(null,{fetchLinks})(ImageUpload);