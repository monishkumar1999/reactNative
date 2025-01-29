import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cart from "../constants/productList";
import CartListItem from './CartListItem';



const ShoppingCart = () => {
  return ( 
    
      <FlatList data={cart} renderItem={({item})=>{
        <CartListItem cartItem={item}></CartListItem>
      }}>

      </FlatList>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({})