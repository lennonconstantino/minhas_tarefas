import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7eYqB40RLvZgXEtmzndTHYKRBEPP2na8",
  authDomain: "tarefaplus-771d2.firebaseapp.com",
  projectId: "tarefaplus-771d2",
  storageBucket: "tarefaplus-771d2.firebasestorage.app",
  messagingSenderId: "898325777226",
  appId: "1:898325777226:web:f210a4dd631a137e984fb3"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
