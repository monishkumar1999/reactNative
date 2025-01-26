import { Redirect } from 'expo-router';
import React from 'react';

const Index = () => {
  // Redirects the user to the `/home` route
  return <Redirect href="/login" />;
};

export default Index;
