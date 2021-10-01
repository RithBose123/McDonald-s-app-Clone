import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Switch,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import firebase from 'firebase';
// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default class Profile extends Component{
  constructor(props){
    super(props)
    this.state={
      isEnabled:false,
      profile_image:"",
      light_theme: true,
      name:""
    }
  }
  toggleSwitch(){
    const previousState= this.state.isEnabled
    const theme=!this.state.isEnabled?"dark":"light"
    var updates={}
    updates[
      "/users/"+ firebase.auth().currentUser.uid+"current_theme"
    ]=theme
    firebase.database().ref().update(updates)
    this.setState({
      isEnabled:!previousState,
      light_theme:previousState
    })
  }
  async fetchUsers(){
var theme, name, image
await firebase.database().ref("/users/"+firebase.auth().currentUser.uid)
.on("value",function(data){
  theme=data.val().current_theme
  name=`${data.val().first_name}${data.val().last_name}`
  image=data.val().profile_picture;
})
this.setState({
  light_theme:theme==="light"?true:false,
  isEnabled: theme==="light"?false:true,
 profile_image:image,
 name:name
})
  }
  componentDidMount(){
    this.fetchUsers();
  }
render(){
  return(
    <View style={this.state.light_theme?styles.containerLight:styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          
          </View>
          <View style={styles.appTitleTextContainer}>
              <Text style={this.state.light_theme?styles.appTitleTextLight:styles.appTitleText}>McDonald's </Text>
            </View>
            </View>
            <View style={styles.screenContainer}>
              <View style={styles.profileImageContainer}>
              <Image source={{uri:this.state.profile_image}} style={styles.profileImage} />
              <Text style={this.state.light_theme?styles.nameTextLight:styles.nameText}>{this.state.name}</Text>

              </View>
               <View style={styles.themeContainer}>
                 <Text style={this.state.light_theme?styles.themeTextLight:styles.themeText}>Dark Theme</Text>
                 <Switch 
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                trackColor={{ false: '#767577', true: this.state.light_Theme?'#eee':"white" }}
                thumbColor={this.state.isEnabled ? '#eea8249' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  this.toggleSwitch();
                }}
                value={this.state.isEnabled}
                 />
               </View>
              </View>
            </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  screenContainer: {
    flex: 0.85
  },
  profileImageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70)
  },

  nameText: {
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginTop: RFValue(10)
  },
  nameTextLight: {
    color: "black",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginTop: RFValue(10)
  },
  themeContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: RFValue(20)
  },
  themeText: {
    color: "white",
    fontSize: RFValue(30),
    fontFamily: "Bubblegum-Sans",
    marginRight: RFValue(15)
  },
  themeTextLight: {
    color: "black",
    fontSize: RFValue(30),
    fontFamily: "Bubblegum-Sans",
    marginRight: RFValue(15)
  }
});