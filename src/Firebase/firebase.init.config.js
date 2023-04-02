// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoHkopOIiGEuZBmHfSH4jZPBGgZIFQLxw",
  authDomain: "to-do-task-manager-443f4.firebaseapp.com",
  projectId: "to-do-task-manager-443f4",
  storageBucket: "to-do-task-manager-443f4.appspot.com",
  messagingSenderId: "11952444545",
  appId: "1:11952444545:web:39af6293a452c6a7fee980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
