import app from 'firebase/app';
import auth from 'firebase/auth';

const config = {
    apiKey: "AIzaSyBI0PemMInyICUH7VAxpswgdpEUZycOP2s",
    authDomain: "marvel-quiz-e4264.firebaseapp.com",
    databaseURL: "https://marvel-quiz-e4264.firebaseio.com",
    projectId: "marvel-quiz-e4264",
    storageBucket: "marvel-quiz-e4264.appspot.com",
    messagingSenderId: "32542084127",
    appId: "1:32542084127:web:6a730ca13c6f4eb63d192a"
  };

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    signupUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    
    loginUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOutUser = () => this.auth.signOut();

}

export default Firebase;