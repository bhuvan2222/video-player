import firebase from "firebase";





const firebaseConfig = {
    apiKey: "AIzaSyCCOofz93T7Vux80tejr9Dsee0PYTwUZx0",
    authDomain: "igclone-1c53b.firebaseapp.com",
    databaseURL: "https://igclone-1c53b.firebaseio.com",
    projectId: "igclone-1c53b",
    storageBucket: "igclone-1c53b.appspot.com",
    messagingSenderId: "218370132713",
    appId: "1:218370132713:web:ff23c84bf662de83d7be78",
    measurementId: "G-SF937246X0"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;