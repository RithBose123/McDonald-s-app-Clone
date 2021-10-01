import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Saver from "../Screens/McSaverCombos"
import BottomTabNavigator from './BottomTabNavigtor';

import Trending from "../Screens/trending"
import StackNavigator from './stackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer=createDrawerNavigator()
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator 
     initialRouteName="Home"
          screenOptions={{
            headerShown: true,
          }}
    >
    <Drawer.Screen name="Home" component={BottomTabNavigator}/>
    <Drawer.Screen name="Trending" component={Trending}/>
    <Drawer.Screen name="McSaver" component={Saver}/>

    </Drawer.Navigator>
  )
}
export default DrawerNavigator