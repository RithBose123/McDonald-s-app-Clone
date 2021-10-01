import React,{Component} from 'react';
import { Text, View, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default class Saver extends Component{
  render(){
    return(
      <View>
      <SafeAreaView style={{  marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),}} />
      <Text> Saver</Text>
      </View>
    )
  }
}