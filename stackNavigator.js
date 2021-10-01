import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Cart from '../Screens/Cart';
import BottomTabNavigator from './BottomTabNavigtor';
const Stack=createStackNavigator()
const StackNavigator=()=>{
    return(
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Home" component={BottomTabNavigator}  />
      <Stack.Screen name="Cart" component={Cart} navigation={this.props.navigation} />
      </Stack.Navigator>
    )
  }
  export default StackNavigator