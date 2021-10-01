import React,{Component} from 'react';
import { Text, View, StyleSheet,SafeAreaView,Image,Button } from 'react-native';
import Constants from 'expo-constants';
   
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default class Food extends Component{
  render(){
    return(
      <View style={{marginBottom:10,borderWidth:4 }} >
      <SafeAreaView />
   
      <Image source={{uri:this.props.food.image}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>{this.props.food.name}                      {this.props.food.price}₹</Text>
      <Text style={{fontSize:10,color:"white"}}>{this.props.food.description }</Text>
      <Button title="Add" color="black" fontSize />
      </View>
    )
  }
}