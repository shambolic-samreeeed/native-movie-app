import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff5a5f",
        tabBarInactiveTintColor: "white",
        tabBarItemStyle:{
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'

        },
        tabBarStyle:{
          backgroundColor:'black',
          borderRadius:50,
          margin:5,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="magnifying-glass" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
