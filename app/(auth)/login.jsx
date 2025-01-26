import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import ProductScreen from '../../component/ProductScreen'; // Import the ProductScreen component

const Login = () => {
  return (
    <View className="flex-1 p-4"> 
      {/* Display the ProductScreen component */}

    
      <ProductScreen /> 
     
      {/* Display an image with proper styling */}
      <Image 
        source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike3.png" }} 
        className="w-96 h-96" // Tailwind styling
      />
   
    </View>
  );
};

export default Login;
