// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDFMyQxC1-bfjGPzTk49Wlffa-7zMhYZNk",
  authDomain: "airbnb-14d13.firebaseapp.com",
  projectId: "airbnb-14d13",
  storageBucket: "airbnb-14d13.appspot.com",
  messagingSenderId: "257872944290",
  appId: "1:257872944290:web:998cf7eeef777ea5444bfb",
  measurementId: "G-845W88VF9K"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
