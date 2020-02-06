
import React, { Component } from "react";
import firebase from "../../firebase";
import "./ImageUpload.css";
import {Input} from "semantic-ui-react"

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
          const {
              image
          } = this.state;
          const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
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
              }
              
          );
  };
  render() {
    return (

          <div class="file-upload">
            <div class="image-upload-wrap">
              <input class="file-upload-input" type='file' onchange={this.handleChange} accept="image/*" />
              <div class="drag-text">
                <h3>Drag and drop a file or select add Image</h3>
              </div>
            </div>
            <div class="file-upload-content">
              <img class="file-upload-image" src="#" alt="your image" />
              <div class="image-title-wrap">
                <button type="button" onclick={this.handleUpload} class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
              </div>
            </div>
          </div>
      
    );
  }
}

export default ImageUpload;