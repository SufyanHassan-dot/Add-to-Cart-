import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDphoyJ7Rg-2sP4gRM41RYB9km9K1IxkNg",
  authDomain: "sufyan-ffc78.firebaseapp.com",
  databaseURL: "https://sufyan-ffc78-default-rtdb.firebaseio.com",
  projectId: "sufyan-ffc78",
  storageBucket: "sufyan-ffc78.appspot.com",
  messagingSenderId: "201819800176",
  appId: "1:201819800176:web:ff57b087a96f1d1775eab5",
  measurementId: "G-T71MGREJD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);