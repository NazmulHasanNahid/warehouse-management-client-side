import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIk7OSbrIlPYEID-99suZHJgEmUoVk5DU",
  authDomain: "warehouse-bb4ea.firebaseapp.com",
  projectId: "warehouse-bb4ea",
  storageBucket: "warehouse-bb4ea.appspot.com",
  messagingSenderId: "1067728053551",
  appId: "1:1067728053551:web:e7e4bda4216b3b0c2bedda"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 