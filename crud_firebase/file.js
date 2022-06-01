//importando as configurações minimas
import firebase from 'firebase';

//configurações para acessar o firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1r4K6dNC1uZpCBIryxVrn7UaZ9slGYwM",
    authDomain: "primeiro-crud-firebase-expo.firebaseapp.com",
    databaseURL: "https://primeiro-crud-firebase-expo-default-rtdb.firebaseio.com",
    projectId: "primeiro-crud-firebase-expo",
    storageBucket: "primeiro-crud-firebase-expo.appspot.com",
    messagingSenderId: "754573440841",
    appId: "1:754573440841:web:858485ebd1a0cf1c660c98",
    measurementId: "G-RTBFZS3FNM"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default firebase;