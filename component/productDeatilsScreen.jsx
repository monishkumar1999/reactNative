import React from "react";
import { View, Image, FlatList, useWindowDimensions, Text, ScrollView } from "react-native";
import product from "../constants/productList";

const ProductDetailsScreen = () => {
  const productDetails = product[0];
  const { width } = useWindowDimensions(); // Get the screen dimensions

  return (
    <View className=" bg-white">
      {/* Product Image Carousel */}
      <FlatList
        data={productDetails.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        className=" p-16 border border-red-400"
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
          
            className="rounded-lg w-screen h-96"
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Product Details */}
      <ScrollView>
      <View className="p-4">
     
        <Text className="font-bold text-3xl mb-2">{productDetails.name}</Text>
        <Text className="font-bold text-2xl text-gray-700 mb-4">$ {productDetails.price}</Text>
      
        <Text className="text-base text-gray-600">{productDetails.description}</Text>
        <Text className="text-base text-gray-600">{productDetails.description}</Text>
        <Text className="text-base text-gray-600">{productDetails.description}</Text>
        <Text className="text-base text-gray-600">{productDetails.description}</Text>
        
      </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
