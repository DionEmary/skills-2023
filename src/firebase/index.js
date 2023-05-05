import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXcI9YNkwXYZanwaIAAwaW6agK6x100v4",
  authDomain: "skills-2023.firebaseapp.com",
  databaseURL: "https://skills-2023-default-rtdb.firebaseio.com",
  projectId: "skills-2023",
  messagingSenderId: "967979212095",
  appId: "1:967979212095:web:4cca0464cd13ee6566078a",
  storageBucket: 'gs://skills-2023.appspot.com',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db
}