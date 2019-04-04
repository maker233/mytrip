import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import AuthSession from 'expo/build/AuthSession';

export default class I extends Component {
  render() {
    return (

      <ImageBackground source={{uri: 'http://i.imgur.com/IGlBYaC.jpg'}} style={{width: '100%', height: '100%'}}>
        {/* <View> */}
          <View >
          
            
            <View style={styles.space}>
              <Image style={styles.welcomeImage} source={{uri: 'https://cdn.dribbble.com/users/449035/screenshots/5612222/mr_worldwide.gif'}}/>
              
            </View>


            <View style={styles.space}>
              <Text>BIENVENIDO A MyTrip</Text> 
            </View>

            <TouchableOpacity style={styles.shareButton} onPress={()=> this.props.navigation.navigate("Intro2")}>
              <Text style={styles.shareButtonText}>NEXT</Text>  
            </TouchableOpacity>
          

            <TouchableOpacity style={styles.shareButton} onPress={()=> this.props.navigation.navigate("Main")}>
              <Text style={styles.shareButtonText}>SKIP</Text>  
            </TouchableOpacity>

          </View>
         {/* </View> */}
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
},
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  loginText: {
    color: 'white',
  },
  space: {
    marginBottom:20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 300,
    height: 180,
    resizeMode: 'contain',
    marginTop: 0,
   
 
  },
});