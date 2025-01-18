import { Redirect } from 'expo-router';
import React from 'react';

const Index = () => {
  const isLoggedIn = false; // Replace with your actual authentication check

  return isLoggedIn ? <Redirect href="/home" /> : <Redirect href="/login" />;
};

export default Index;
