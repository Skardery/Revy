import React, { useEffect } from 'react';
import { signInWithRedirect, getRedirectResult, OAuthProvider, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

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
export const auth = getAuth(app);

const LoginPage: React.FC = () => {

  return (
    <div>
      <button>Sign in with Microsoft</button>
    </div>
  );
};

export default LoginPage;
