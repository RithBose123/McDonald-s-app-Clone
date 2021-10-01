import React,{Component} from 'react';
import { Text, View, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
// You can import from local files
import firebase from 'firebase';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default class Loading extends Component{
    checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('DashBoard');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  };
  componentDidMount(){
    this.checkIfLoggedIn()
  }
  render(){
    return(
      <View>
      <SafeAreaView style={{  marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),}} />
      <Text> Loading . . . </Text>
      </View>
    )
  }
}