// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_FB_APIKEY;
const authDomain = import.meta.env.VITE_FB_AUTHDOMAIN;
const projectId = import.meta.env.VITE_FB_PROJECTID
const storageBucket = import.meta.env.VITE_FB_STORAGEBUCKET
const messagingSenderId = import.meta.env.VITE_FB_MESSAGINGSENDERID
const appId = import.meta.env.VITE_FB_APPID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};