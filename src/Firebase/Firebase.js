import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyDOWaYSMncqc9NwzOqpIyI2DMAxEVd1USg",
    authDomain: "crwn-db-fffd5.firebaseapp.com",
    projectId: "crwn-db-fffd5",
    storageBucket: "crwn-db-fffd5.appspot.com",
    messagingSenderId: "208806241878",
    appId: "1:208806241878:web:8ebccefe9b8414c7fe3df7",
    measurementId: "G-TZT55E66NN"
}

var provider = new app.auth.GoogleAuthProvider();
var provider_fb = new app.auth.FacebookAuthProvider();

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
        
	}
     
	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}
    
    async signInGoogle() {

        return this.auth.signInWithPopup(provider)
    }
    async signInFacebook() {

        return this.auth.signInWithPopup(provider_fb)
    }


	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

export default new Firebase()