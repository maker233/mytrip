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

import RunService from '../../services/runService';


export default class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'Nombre Ruta',
      distance:'0',
      password: '',
      maxusers:'100',
      photo:'https://img.icons8.com/dusk/64/000000/globe-earth.png'
    };
    this.service = new RunService();

  }

  onSubmitListener = (event) => {
    
    //console.log(this.state)
    const {name, distance, password, maxusers, photo} = this.state

    this.service.createRun({name, distance, password, maxusers, photo})
        .then(response => {
          this.setState({ name: "", distance: "", password: "", maxusers: "" , photo: ""}
          , ()=> this.props.navigation.navigate("RunsStack"));           
        })
        .catch(error => console.log(error))
}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.space}>
          <Image style={styles.welcomeImage} source={{uri: 'https://img.icons8.com/dusk/64/000000/world-map.png'}}/>
          
        </View>
        <View style={styles.space}>
          <Text style={styles.space}>CREA UNA RUTA</Text> 
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/dusk/64/000000/user.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Nombre de la Ruta"
              // value={this.state.name}
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/64/000000/ruler.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Distancia"
              // value={this.state.email}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(distance) => this.setState({distance})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/50/000000/lock.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Contraseña (opcional)"
              // value={this.state.password}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/group-foreground-selected.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Número max. participantes"
              // value={this.state.bio}
              underlineColorAndroid='transparent'
              onChangeText={(maxusers) => this.setState({maxusers})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/50/000000/camera.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Imagen Principal"
              // value={this.state.photo}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(photo) => this.setState({photo})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(event) => this.onSubmitListener()}>
          <Text style={styles.loginText}>CREAR RUTA</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate("RunsStack")}>
            <Text>Volver a las Rutas</Text>
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
  loginText: {
    color: 'white',
  },
  space: {
    marginBottom:20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0,
  },
});