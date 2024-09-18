import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Header from '@/components/navbar/main-navbar';
import SmHeader from '@/components/navbar/sm-konto-navbar';
import { Footer } from '@/components/navbar/footer';

const LoginButton = () => {
    const startLogin = () => {
      window.location.href = '/api/auth/vipps';
    };
  
    return (
      <button onClick={startLogin}>Logg inn med Vipps</button>
    );
  };
  
  export default LoginButton;