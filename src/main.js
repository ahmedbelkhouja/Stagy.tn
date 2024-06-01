import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1K0pzydBpVMqFw5o0xz08M1m1PGJq7qA",
  authDomain: "stagy-494fb.firebaseapp.com",
  projectId: "stagy-494fb",
  storageBucket: "stagy-494fb.appspot.com",
  messagingSenderId: "996331092725",
  appId: "1:996331092725:web:42082515af72470bd6a3bc",
  measurementId: "G-J1MMBKP6WY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app=createApp(App);
app.use(router);

app.mount('#app')
