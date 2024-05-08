import firebase from "firebase/app"
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDDFAkV2-r0YtJy5id73hSHtDBd_aJ_V7c",
    authDomain: "meuprimeiroprojeto-dd188.firebaseapp.com",
    databaseURL: "https://meuprimeiroprojeto-dd188-default-rtdb.firebaseio.com",
    projectId: "meuprimeiroprojeto-dd188",
    storageBucket: "meuprimeiroprojeto-dd188.appspot.com",
    messagingSenderId: "618046607626",
    appId: "1:618046607626:web:e37f1dbee3c3d877b4eaf3",
    measurementId: "G-26B87R6844"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

 export default firebase;
  