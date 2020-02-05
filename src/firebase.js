import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCW7LdFgMUiPDDb4TWgrujUx477Eq50OXQ",
  authDomain: "t-repo.firebaseapp.com",
  databaseURL: "https://t-repo.firebaseio.com",
  projectId: "t-repo",
  storageBucket: "t-repo.appspot.com",
  messagingSenderId: "200946263531",
  appId: "1:200946263531:web:4fbff104fe25bb6f4125ae"
};
firebase.initializeApp(firebaseConfig);

export default firebase;