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

export default class SigninView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
    };
    this.service = new AuthService();
  }

  // componentDidMount() {
  //   console.log("Componente Sigin montado")
  // }

  // onSubmitListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
    
  // }

  onSubmitListener = (event) => {
    console.log(this.state)
    const {name, username, password} = this.state

    this.service.signup(name, username, password)
        .then(response => {
            this.setState({ name: "", username: "", password: "" }, ()=> this.props.navigation.navigate("Login"));
            this.props.setUser(response)
            
            // , () => this.props.navigation.navigate("EditProfile");
            
        })
        .catch(error => console.log(error))
}

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.space}>
          <Image style={styles.welcomeImage} source={{uri: 'https://png.icons8.com/dusk/64/000000/user.png'}}/>
          
        </View>
        <View style={styles.space}>
          <Text style={styles.space}>¡ REGÍSTRATE AHORA !</Text> 
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/dusk/64/000000/user.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Nombre"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              // value={this.state.email}
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


        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(event) => this.onSubmitListener()}>
          <Text style={styles.loginText}>REGISTRARME</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Login")}>
            <Text>Volver al Log in</Text>
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
      backgroundColor: '#2E2E64',
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
    width: 200,
    height: 120,
    resizeMode: 'contain',
    marginTop: -50,
    marginLeft: 0,
  },
});