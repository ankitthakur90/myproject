import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDWtjMe0SjoNiIw7mZHbFfaBO2N7utaWU",
  authDomain: "signup-login-01.firebaseapp.com",
  projectId: "signup-login-01",
  storageBucket: "signup-login-01.appspot.com",
  messagingSenderId: "100848261127",
  appId: "1:100848261127:web:32df448adf01b21f3f32a2",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
