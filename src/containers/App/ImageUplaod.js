
import React, { Component } from "react";
import firebase from "../../firebase";
import "./ImageUpload.css";
import {Button,Progress} from "semantic-ui-react"
import {connect} from "react-redux";
import {fetchLinks} from "../../actions/index"
import Resizer from "react-image-file-resizer"


class ImageUpload extends Component {
 
  state = {
    file: "",
    progress: 0,
    form:false,
    imageLink:null
  };

  handleChange = e => {
    if (e.target.files[0]) {
      this.setState({
        form :true
      })
      const file = e.target.files[0];
      this.setState(() => ({ file }));
    }else{
      this.setState({
        form:false
      })
    }
  };

  handleEfileUpload(url,file,type, name) {
    Resizer.imageFileResizer(
      file,
      1000,
      1000,
      'JPEG',
      100,
      0,
      uri => {
        const storeEncryUrlTask = firebase
          .storage().ref(`encry/${type}/${name}`)
          .putString(uri, 'data_url')

        storeEncryUrlTask
          .on("state_changed",
            snap => console.log(snap),
            error => console.log(error),
            () => {
              storeEncryUrlTask.snapshot.ref.getDownloadURL().then(eurl => {
                const storeDownEncryUrlTask = firebase.database().ref(`${type}/${name}`).set({
                    eurl,
                    url
                  },
                  this.setState({
                    progress: 0,
                    file: ""
                  }))
              })
            })

      },
      'base64'
    );
  }

  handleUpload = () => {
    const {
      file
    } = this.state;
    

    const uploadTask = firebase.storage().ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed", // 1st argument  --- type of listener

      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({
          progress
        });
      }, // 2nd argument --- handles snapshot

      error => {
        console.log(error);
      }, // 3rd argument --- handles error

      () => {
        uploadTask.snapshot.ref.getDownloadURL()
          .then(url => {
            firebase.storage().ref(`files/${file.name}`).getMetadata().then(metaData => {
              const type = metaData.contentType.split("/")[0];
              const name = file.name.split(".")[0]
              this.handleEfileUpload(url,file,type,name)
            })

          })
      } 
    ); // 4th argument --- executes when upload is successful
    
  };

  render() {
    const {file,progress,form} = this.state
    return (
          <div className="file-upload">
            <div className="image-upload-wrap">
              <input className="file-upload-input" type="file" onChange={this.handleChange}/>
              <div className="drag-text">
                <h3>{file !== "" ?`${file.name}`: "Drag and drop a file or click on the box"}</h3>
              </div>
            </div>

           
            <Button
              onClick={this.handleUpload}
              className="waves-effect waves-light btn"
              content ="Upload"
              size = "medium"
              style={{margin:"10px"}}
              disabled={!form}
            />
            <div className="row">
            <Progress 
                percent={progress} 
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