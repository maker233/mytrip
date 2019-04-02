import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'; 

import UserService from '../services/userService';


export default class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:"",
      username:"",
      password:"",
      bio:"",
      photo:""
    };
    this.service = new UserService();

  }

  
  onSubmitListener = (event) => {
    
    // console.log(this.state)
    const {name, username, password, bio, photo} = this.state

    this.service.updateUser({name, username, password, bio, photo})
        .then(response => {() => {          
          this.setState({ 
            name: response.name,
            username: response.username,
            password: response.password, 
            bio: response.bio,
            photo:response.photo
           })
        }})
        .catch(error => console.log(error))
}

  componentDidMount() {
    console.log("Componente EditProfile montado")
    
        this.service.getOneUser()
        .then(response => {
          // console.log(response.name)
          this.setState({ 
            name: response.name,
            username: response.username,
            password: response.password,
            bio: response.bio,
            photo:response.photo
           })
        })
  }

  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.space}>
          <Image style={styles.welcomeImage} source={{uri: 'https://png.icons8.com/dusk/64/000000/user.png'}}/>
          
        </View>
        <View style={styles.space}>
          <Text style={styles.space}>EDITA TU PERFIL</Text> 
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/dusk/64/000000/user.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              value={this.state.name}
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              value={this.state.username}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              value={this.state.password}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Bio"
              value={this.state.bio}
              underlineColorAndroid='transparent'
              onChangeText={(bio) => this.setState({bio})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Photo"
              value={this.state.photo}
              
              underlineColorAndroid='transparent'
              onChangeText={(photo) => this.setState({photo})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(event) => this.onSubmitListener()}>
          <Text style={styles.loginText}>Editar Perfil</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.deleteButton]} onPress={(event) => this.service.deleteUser()}>
          <Text style={styles.loginText}>Eliminar cuenta</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Volver al perfil</Text>
        </TouchableHighlight>

        

      </KeyboardAvoidingView>
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
  deleteButton: {
    backgroundColor: "#FF0000",
  },
  loginText: {
    color: 'white',
  },
  space: {
    marginBottom:5
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0,
  },
});