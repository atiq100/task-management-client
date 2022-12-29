// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCthA4wWHvC2MWYkiTeGZxugR76kcY6xQM",
  authDomain: "task-manager-2c66a.firebaseapp.com",
  projectId: "task-manager-2c66a",
  storageBucket: "task-manager-2c66a.appspot.com",
  messagingSenderId: "319031699032",
  appId: "1:319031699032:web:fc31578886405089588c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;