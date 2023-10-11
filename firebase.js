import {initializeApp} from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBItBY17LHdwHyVwrzIVsTKL-BrA9RlFSE",
  authDomain: "padariasonic.firebaseapp.com",
  projectId: "padariasonic",
  storageBucket: "padariasonic.appspot.com",
  messagingSenderId: "1023928326249",
  appId: "1:1023928326249:web:fa49e13f86aa9f196b2af8",
  measurementId: "G-SN7876X11Y"
};
const app = initializeApp(firebaseConfig);

export default app;