import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import ProductScreen from '../../component/ProductScreen'; // Import the ProductScreen component
import ProductDetailsScreen from '../../component/productDeatilsScreen';
const Login = () => {
  return (
    <View className=""> 
      {/* Display the ProductScreen component */}

    
      {/* <ProductScreen />  */}
      <ProductDetailsScreen /> 
      {/* Display an image with proper styling */}
     
   
    </View>
  );
};

export default Login;
