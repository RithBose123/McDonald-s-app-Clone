import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from '../Screens/FeedScreen';
import Profile from '../Screens/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
  <Tab.Navigator
    labeled={false}
    barStyle={{ backgroundColor: 'red', height: '8%' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focussed, color, size }) => {
        let iconNames;
        if (route.name === 'Feed') {
          iconNames = focussed ? 'cart' : 'cart-outline';
        } else if (route.name === 'Profile') {
          iconNames = focussed ? 'person' : 'person-outline';
        }
        return (
          <Ionicons
            name={iconNames}
            size={size}
            color={color}
            style={{ width: RFValue(40), height: RFValue(40) }}
          />
        );
      },
    })}
    activeColor="yellow"
    inactiveColor="white"
    >
    <Tab.Screen name="Feed" component={Home}/>
    <Tab.Screen name="Profile" component={Profile}/>

    </Tab.Navigator>
  )
};
export default BottomTabNavigator