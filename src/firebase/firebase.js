import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBNesk0J3jUBjoVGdINr5M6k65FVP5cOC8",
  authDomain: "react-firebase-auth-7c1d0.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-7c1d0.firebaseio.com",
  projectId: "react-firebase-auth-7c1d0",
  storageBucket: "react-firebase-auth-7c1d0.appspot.com",
  messagingSenderId: "1083751859638"
};

const devConfig = {
    apiKey: "AIzaSyC3In3b5XNVJiwekU-QVZf06jeOiEYE8Dg",
    authDomain: "react-firebase-auth-dev.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-dev.firebaseio.com",
    projectId: "react-firebase-auth-dev",
    storageBucket: "",
    messagingSenderId: "301314996021",
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};
