import { getStorage } from 'firebase/storage'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYveOLGETegdyq2z4sjnM4chJUH34zSpc",
  authDomain: "test-b8023.firebaseapp.com",
  projectId: "test-b8023",
  storageBucket: "test-b8023.appspot.com",
  messagingSenderId: "685333250695",
  appId: "1:685333250695:web:348bf0e3cb7ef362842e22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
