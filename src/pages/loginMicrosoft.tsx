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
  useEffect(() => {
    // Handle the sign-in result after redirect
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // The signed-in user info
          const user = result.user;
          if (user.email && user.email.endsWith('@osloskolen.no')) {
            console.log('Successful login for:', user.email);
            // User is successfully logged in with an @osloskolen.no account
            // You might want to redirect the user or update the UI accordingly
          } else {
            // Sign out the user if the email domain is not @osloskolen.no
            signOut(auth).then(() => {
              alert('Only @osloskolen.no accounts are allowed.');
              // Optionally, redirect the user to the login page or show an error message
            });
          }
        }
      });
  }, []);

  const handleMicrosoftLogin = () => {
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <button onClick={handleMicrosoftLogin}>Sign in with Microsoft</button>
    </div>
  );
};

export default LoginPage;
