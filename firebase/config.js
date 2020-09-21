import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAGSWPca3DiAjNHAhFZ5-uBEY5vAQkNNI8',
    authDomain: 'rndiscordapp.firebaseapp.com',
    databaseURL: 'https://rndiscordapp.firebaseio.com',
    projectId: 'rndiscordapp',
    storageBucket: 'rndiscordapp.appspot.com',
    messagingSenderId: '336729147501',
    appId: '1:336729147501:android:52725b8343785dec945764',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };