import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiuKu6LpEFcRARC55KUS6z4nhiwFYYG00",
    authDomain: "lukols-41db0.firebaseapp.com",
    projectId: "lukols-41db0",
    storageBucket: "lukols-41db0.appspot.com",
    messagingSenderId: "175200567246",
    appId: "1:175200567246:web:1aeec6aff8026ec344359f",
    measurementId: "G-3EFX0LXR9G"
  };
  var firebaseApp = firebase.initializeApp(firebaseConfig);
  var cloudFirestore = firebaseApp.firestore();

  export {cloudFirestore};
  export default firebase;