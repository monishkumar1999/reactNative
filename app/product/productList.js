import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import product from '../../constants/productList';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList
        data={product}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>₹{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
  },
});
