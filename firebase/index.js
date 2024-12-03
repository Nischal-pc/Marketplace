// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ7OWzGfc1n2XZ-T_5F4Gp5W6Ryw5Qq1Q",
  authDomain: "kurakani-4aae0.firebaseapp.com",
  projectId: "kurakani-4aae0",
  storageBucket: "kurakani-4aae0.appspot.com",
  messagingSenderId: "410661618677",
  appId: "1:410661618677:web:7d53dc03b44595067196bc",
  measurementId: "G-KDS489FWNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}