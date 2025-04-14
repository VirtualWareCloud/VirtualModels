import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDkzbGIeP0lCIl1H9XXkDmllXtauXQ9rLjU",
  authDomain: "virtualmodels-ce9e5.firebaseapp.com",
  projectId: "virtualmodels-ce9e5",
  storageBucket: "virtualmodels-ce9e5.appspot.com",
  messagingSenderId: "128073406613",
  appId: "YOUR_APP_ID_HERE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
