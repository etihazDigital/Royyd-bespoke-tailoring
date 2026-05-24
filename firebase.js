
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_uy8vZS3Xwz9ChcrHmJBwXYFnnjGzKUY",
    authDomain: "royyd-17da6.firebaseapp.com",
    projectId: "royyd-17da6",
    storageBucket: "royyd-17da6.firebasestorage.app",
    messagingSenderId: "296518333647",
    appId: "1:296518333647:web:174b72dab5cb3e6bf773ba"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export { app };