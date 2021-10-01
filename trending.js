
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
  Image,
  TextInput,
 Alert
} from 'react-native';
import firebase from 'firebase';
import Constants from 'expo-constants';
let rith = 200;
let menu = require('./menu.json');
import Food from './foodCard';
import { RFValue } from 'react-native-responsive-fontsize';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default class Trending extends Component {
  constructor(props){
    super(props)
    this.state={
  burger:0,
  frenchFries:0,
  mcSaver:0,
address:""
    }
  }


 async foodAction(){
  await firebase.database().ref("/Added/"+firebase.auth().currentUser.uid+"/food ordered/")
  .set({
    burger:this.state.burger,
    frenchFries:this.state.frenchFries
   } ).then(function(data){

   })
 }

  render() {

    return (
      <View style={{ backgroundColor: 'red',flex:1 }}>
        <SafeAreaView
          style={{
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 18,
          }}
        />
        <Text style={{ color: 'white', fontSize: 50, textAlign:"center" }}>
          McDonald's
        </Text>
   
         
      
          
        <ScrollView >
        <View style={{marginBottom:10,borderWidth:4,flex:0.9 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>burger                      200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="black" onPress={()=>{
       
       this.setState({
        burger:this.state.burger+=1
      })
      }} />
       <Button title="decrease" color="black" onPress={()=>{
     
     this.setState({
       burger:this.state.burger-=1
     })
      }} />
      <Text>{this.state.burger}</Text>
      <Text>{this.state.burger *  200}$</Text>
      </View>
      <View style={{marginBottom:10,borderWidth:4 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>french fries                200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="yellow" onPress={()=>{
        this.setState({
          frenchFries:this.state.frenchFries+=1
        })
      }} />
      <Button title="Decrease"
      onPress={()=>{
        this.setState({
          frenchFries:this.state.frenchFries-=1
        })
      }}
      />
       <Text>{this.state.frenchFries}</Text>
      <Text>{this.state.frenchFries * 200} ₹</Text>
      </View>
      <View style={{marginBottom:10,borderWidth:4 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>Burger                      200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="yellow" fontSize />
      </View>
      <View style={{marginBottom:10,borderWidth:4 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>Burger                      200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="yellow" fontSize />
      </View>
      </ScrollView>
      <Text>{this.state.frenchFries * 200 + this.state.burger * 200}₹</Text>
      <Button title="Order" onPress={()=>{
this.foodAction();
Alert.alert("Your order has been updated in the database")
      }}/>
      </View>
    );
  }
}
