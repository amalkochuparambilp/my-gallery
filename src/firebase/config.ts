import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD987QlN1OVr_sD0IlPOqH7ipTfZ1BwhB4",
  authDomain: "kgallery-616c3.firebaseapp.com",
  projectId: "kgallery-616c3",
  storageBucket: "kgallery-616c3.appspot.com",
  messagingSenderId: "255300642412",
  appId: "1:255300642412:web:591606067e327b78d35a49"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};