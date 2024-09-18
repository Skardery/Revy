import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBZXPScoE81Nm44S1-1166xgUmnn5aDjF4",
    authDomain: "revyfest-billettsalg.firebaseapp.com",
    databaseURL: "https://revyfest-billettsalg-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "revyfest-billettsalg",
    storageBucket: "revyfest-billettsalg.appspot.com",
    messagingSenderId: "973464284491",
    appId: "1:973464284491:web:95d854d4b6037c44720cce"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);

  export default app;