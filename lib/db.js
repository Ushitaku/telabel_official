import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
apiKey:process.env.FIREBASE_API_KEY,
authDomain:process.env.FIREBASE_AUTH_DOMAIN,
projectId:process.env.FIREBASE_PROJECT_ID,
storageBucket:process.env.FIREBASE_STORAGE_BAKET,
messagingSenderId:process.env.FIREBASE_MESSAGE_SENDER_ID,
appId:process.env.FIREBASE_APP_ID,
};

// firebaseの２重起動抑止
// export default function initFirebase(){

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase
