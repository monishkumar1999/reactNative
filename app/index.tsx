import { Redirect } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  // Redirects the user to the `/home` route
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hsello, Word!</Text>
      </View>
    );
};

export default Index;
