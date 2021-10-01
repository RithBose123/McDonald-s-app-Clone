import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from "@react-navigation/native"
import DrawerNavigator from "../Navigation/DrawerNavigator"


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default class DashBoard extends Component{
  render(){
    return(
  <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>
    )
  }
}