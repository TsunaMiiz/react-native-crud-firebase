import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZI8cIyxPvA9mAsKSpxfjiD0SCy0tfZJo",
    authDomain: "react-native-crud-b53fb.firebaseapp.com",
    databaseURL: "https://react-native-crud-b53fb.firebaseio.com",
    projectId: "react-native-crud-b53fb",
    storageBucket: "react-native-crud-b53fb.appspot.com",
    messagingSenderId: "61995236596",
    appId: "1:61995236596:web:c29b0bfc68eb6ae598f2a1",
    measurementId: "G-SYDCJ27Z7J"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;