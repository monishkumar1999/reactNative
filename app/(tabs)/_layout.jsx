import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown:false }}>
      <Tabs.Screen name="home" >
      </Tabs.Screen>
      <Tabs.Screen name="explore">
      </Tabs.Screen>
      <Tabs.Screen name="profile">
      </Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
