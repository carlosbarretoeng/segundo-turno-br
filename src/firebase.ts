import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHh_7y5Ag4QqTodEuFpKkm2IxcY0C81ic",
  authDomain: "segundo-turno-br.firebaseapp.com",
  projectId: "segundo-turno-br",
  storageBucket: "segundo-turno-br.appspot.com",
  messagingSenderId: "410923317433",
  appId: "1:410923317433:web:f32cff0c1d933ad5f60368"
};

const firebasApp = initializeApp(firebaseConfig);

export default firebasApp;