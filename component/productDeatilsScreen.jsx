import React from "react";
import { View, Image, Text, Pressable, ScrollView } from "react-native";
import product from "../constants/productList";

const ProductDetailsScreen = () => {
  const productDetails = product[0];

  const addTocart=()=>{
    console.warn("add to cart working")
  }
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Product Image Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        className="p-4"
      >
        {productDetails.images.map((item, index) => (
          <Image
            key={index}
            source={{ uri: item }}
            className="h-72 w-screen rounded-lg "
           
          />
        ))}
      </ScrollView>

      {/* Product Details */}
      <View className="p-4">
        <Text className="text-2xl font-bold mb-2">{productDetails.name}</Text>
        <Text className="text-xl font-semibold text-gray-600 mb-4">
          ${productDetails.price}
        </Text>
        <Text className="text-base text-gray-600 mb-4">{productDetails.description}</Text>
       

        {/* Add to Cart Button */}
        <Pressable className="bg-black py-3 rounded-full shadow-lg mt-4" onPress={addTocart}>
          <Text className="text-white text-lg text-center font-bold">Add to Cart</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
