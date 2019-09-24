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

export function onSignUp(email, username, password) {
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
      user.updateProfile({
        displayName: username,
      }).then(() => {
        console.log('successfully updated display name');
      }).catch((error) => {
        console.log('failed to update display name');
      });
    } else {
      console.log('error no sign in');
    }
  });
}

export function onSignIn(email, password) {
  authenticator.signInWithEmailAndPassword(email, password).catch((error) => {
    console.log('error signing in');
  });
}

export function onUpdateProfile(gender, partner, horoscope, interest, hatred) {
  authenticator.onAuthStateChanged((user) => {
    if (user) {
      database.ref(`users/${user.uid}/profile/`).set({
        Gender: gender,
        Partner: partner,
        Horoscope: horoscope,
        Interest: interest,
        Hatred: hatred,
      });
    } else {
      console.log('Error updating profile');
    }
  });
}
