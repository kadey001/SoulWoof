import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLWmvzBX36a7U2hCeSC4JiX2E_cAi1C78",
    authDomain: "woof-238917.firebaseapp.com",
    databaseURL: "https://woof-238917.firebaseio.com",
    projectId: "woof-238917",
    storageBucket: "woof-238917.appspot.com",
    messagingSenderId: "581271476437"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }
    // *** Auth API ***

    // doCreateUserWithGoogle = (provider) => this.auth.signInWithPopup(provider).then(function(result) {
    //     var token = result.credential.accessToken;
    //     var user = result.user;
    // }).catch(function(error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     var email = error.email;
    //     var credential = error.credential;
    // });

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;