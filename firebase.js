import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDqURPL1-IFwVQN8lKBvpIXpA3FJSJf5Hg",
  authDomain: "login-a686e.firebaseapp.com",
  projectId: "login-a686e",
  storageBucket: "login-a686e.appspot.com",
  messagingSenderId: "967741850858",
  appId: "1:967741850858:web:df96036f888f2f633cc393",
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };

