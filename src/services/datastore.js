import Firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyB7qrmSCrbcgbgDKXHsFVa8cRml3ZCgP98',
  authDomain: 'moranlove-723ca.firebaseapp.com',
  databaseURL: 'https://moranlove-723ca.firebaseio.com',
  projectId: 'moranlove-723ca',
  storageBucket: 'moranlove-723ca.appspot.com',
  messagingSenderId: '780685462806',
  appId: '1:780685462806:web:bd3e66b66f85c62b485437',
};

Firebase.initializeApp(firebaseConfig);

const database = Firebase.database();
const authenticator = Firebase.auth();

export default function onSignUp(email, username, password) {
  authenticator.createUserWithEmailAndPassword(email, password).catch((error) => {
    console.log(`Error: ${error}`);
  });

  authenticator.onAuthStateChanged((user) => {
    if (user) {
      const userEmail = user.email;
      database.ref(`users/${user.uid}`).set({
        Email: userEmail,
        Username: username,
      });
    } else {
      console.log('error no sign in');
    }
  });
}
