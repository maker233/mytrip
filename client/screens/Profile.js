import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'; 

import UserService from '../services/userService';

export default class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      username:'',
      bio:'',
      photo:''
    }
    this.service = new UserService();

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

  // logout = () => {
  //   this.service.logout()
  //   ,() => this.props.navigation.navigate("Login")
  // }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.photo}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>{this.state.bio}</Text>
              
              <TouchableOpacity style={styles.buttonContainer} 
                onPress={ () => this.props.navigation.navigate("EditProfile")}>
                <Text>Editar Perfil</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}
                onPress={ () => this.props.navigation.navigate("MyRuns")}>
                <Text>Mis Rutas</Text> 
              </TouchableOpacity>

              <TouchableHighlight style={styles.buttonContainer} 
                onPress={() => this.props.navigation.navigate("Camera")}>
                <Text>Hacer Foto</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.buttonLogoutContainer} 
                onPress={() => this.props.navigation.navigate("Login")}>
                <Text>Salir</Text>
              </TouchableHighlight>

            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  // name:{
  //   fontSize:28,
  //   color: "#696969",
  //   fontWeight: "600"
  // },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  buttonLogoutContainer:{
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#ED2939"
  }
});