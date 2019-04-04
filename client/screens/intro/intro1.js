import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class I extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.space}>
          <Image style={styles.welcomeImage} source={{uri: 'https://cdn.dribbble.com/users/449035/screenshots/5612222/mr_worldwide.gif'}}/>
          
        </View>


        <View style={styles.space}>
          <Text>BIENVENIDO A MyTrip</Text> 
        </View>

        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("Intro2")}>
          <Text style={styles.buttonText}>NEXT</Text>  
        </TouchableOpacity>
       

        <TouchableOpacity style={styles.shareButton} onPress={()=> this.props.navigation.navigate("Main")}>
          <Text style={styles.buttonText}>SKIP</Text>  
        </TouchableOpacity>


      </View>
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
  buttonText: {
    color: "#FFFFFF",
    fontSize:20,
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
  button: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  loginText: {
    color: 'white',
  },
  space: {
    marginBottom:20
  },
  welcomeImage: {
    width: 300,
    height: 180,
    resizeMode: 'contain',
    marginTop: -50,
    marginLeft: 0,
  },
});