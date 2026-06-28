import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_uy8vZS3Xwz9ChcrHmJBwXYFnnjGzKUY",
  authDomain: "royyd-17da6.firebaseapp.com",
  projectId: "royyd-17da6",
  storageBucket: "royyd-17da6.firebasestorage.app",
  messagingSenderId: "296518333647",
  appId: "1:296518333647:web:174b72dab5cb3e6bf773ba"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.royydFirebase = {
  app,
  db
};

export { app, db };