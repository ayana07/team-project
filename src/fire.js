import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDt8HA1EVwZDzmDkQfJmNYA8OHLJSbVNzA",
	authDomain: "pair-pro-f3825.firebaseapp.com",
	projectId: "pair-pro-f3825",
	storageBucket: "pair-pro-f3825.appspot.com",
	messagingSenderId: "892736517303",
	appId: "1:892736517303:web:f0a1ccbf4a3753bf5a4932",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
