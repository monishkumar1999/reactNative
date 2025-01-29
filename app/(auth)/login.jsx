import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import ProductScreen from '../../component/ProductScreen'; // Import the ProductScreen component
import ProductDetailsScreen from '../../component/productDeatilsScreen';
import ShoppingCart from '../../component/ShoppingCart';
const Login = () => {
  return (
    <View className="flex-1"> 
      {/* Display the ProductScreen component */}

    <ShoppingCart/>
      {/* <ProductScreen />  */}
      <ProductDetailsScreen /> 
      {/* Display an image with proper styling */}
     
   
    </View>
  );
};

export default Login;
