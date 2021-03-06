import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import AuthService from '../../services/authService';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.service = new AuthService();
  }

  // onSubmitListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
    
  // }

  onSubmitListener = (event) => {
    // console.log(this.state)

    // this.service.sayHello()
    
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
        .then(response => {
            this.setState({ email: "", password: "" }, ()=> this.props.navigation.navigate("Main"));
            // this.props.setUser(response),
            // () => 
            
        })
        .catch(error => console.log(error))
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.space}>
          <Image style={styles.welcomeImage} source={{uri: 'https://cdn.dribbble.com/users/449035/screenshots/5612222/mr_worldwide.gif'}}/>
          
        </View>


        <View style={styles.space}>
          <Text>BIENVENIDO A MyTrip</Text> 
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmitListener()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>¿Has olvidado tu contraseña?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Signin")}>
            <Text>Crear cuenta</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#29297D',
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
  loginButton: {
    backgroundColor: "#00b5ec",
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