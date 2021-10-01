import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Constants from 'expo-constants';
let rith = 200;
import firebase from "firebase"
let menu = require('./menu.json');
import Food from './foodCard';
import { RFValue } from 'react-native-responsive-fontsize';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Trending
 from './trending';

export default class Home extends Component {
constructor(props){
  super(props)
  this.state={
   isAdded:false,
   address:"",
   added:"",
   frenchFries:0
  }
}
async addFrenchFriesAction(){
  var name
 await firebase.database().ref("/Added/"+firebase.auth().currentUser.uid+"FrenchFries")
.on("value", function(data){
 // name = data.val().frenchFries;
}) 
this.setState({
frenchFries:name
})
}

componentDidMount(){
  this.addFrenchFriesAction()
}
  render() {
    
    return (
      <View>
      <SafeAreaView />
     <Text>{this.state.frenchFries}</Text>
    
     </View>
    )
  }
}
