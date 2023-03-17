import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5YNhOmeQ9sGjIV3Ai60-ACH52enw4BS0",
  authDomain: "geomathapp-7b721.firebaseapp.com",
  databaseURL:
    "https://geomathapp-7b721-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geomathapp-7b721",
  storageBucket: "geomathapp-7b721.appspot.com",
  messagingSenderId: "862898499355",
  appId: "1:862898499355:web:25119c63dbf848250cedbe",
  measurementId: "G-EQKY3RWTNZ",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
