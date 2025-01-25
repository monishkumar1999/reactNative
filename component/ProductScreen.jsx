import React from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import product from '../constants/productList'; // Your product data

const ProductScreen = () => {
  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        renderItem={({ item }) => (
          <View className="mb-4">
            {/* Image with Tailwind classes for NativeWind */}
            <Image
              source={{ uri: item.image }} // Pass item.image without quotes
              className="w-48 h-60 rounded-md m-4" // Adjusted width for 2 images per row
            />
            {/* If you have text in this part, ensure it's wrapped in <Text> */}
          <Text>fs</Text>
          </View>
        )}
        numColumns={2} // This ensures that there are 2 items per row
      />
    </View>
  )
}

export default ProductScreen;
