import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Login from "./Screens/login"
import DashBoard from "./Screens/Dashboard"
import Loading from "./Screens/loading"
import {NavigationContainer} from "@react-navigation/native"
import DrawerNavigator from "./Navigation/DrawerNavigator"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from "firebase"
import { firebaseConfig} from "./config"
// You can import from local files
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const SwitchNavigator = createSwitchNavigator({
  Loading:Loading,
  Login:Login,
  DashBoard:DashBoard
})
const AppContainer=createAppContainer(SwitchNavigator)
export default function App() {
  return (
<AppContainer/>
      
  
  );
}

