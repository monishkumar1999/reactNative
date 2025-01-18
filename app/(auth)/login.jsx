import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Login Page</Text>
      <Button title="Login" onPress={() => { /* Handle Login */ }} />
    </View>
  );
};

export default Login;
