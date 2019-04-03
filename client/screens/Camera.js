import React, { Component } from 'react';
import {Image,  Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Expo from 'expo';


export default class App extends Component {

  state = {
    chosenImage: null,
    takenImage:null
  }
  _launchCameraRollAsync =async ()=>{
    let {status} = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
    if(status !== 'granted'){
      console.error('Camera not granted')
      return
    }
    let image = await Expo.ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      exif:true,
    })
    this.setState({chosenImage: image})
    console.log(image)
  }
  _launcCameraAsync =async()=>{
    let {status} = Expo.Permissions.askAsync(Expo.Permissions.CAMERA)
    if(status !== 'granted'){
      console.log("Camera permission Denied")
    }
    let image = await Expo.ImagePicker.launchCameraAsync()
    console.log(image)
    // let flippedImage = await Expo.ImageManipulator.manipulate(image.uri, [
    //   {flip:{vertical:true, horizontal:false}}
    // ])
    this.setState({takenImage: image})

    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         Photo
        </Text>
        <View style={{
          flexDirection:'row'
        }}>
        <Image source={'https://bootdey.com/img/Content/avatar/avatar6.png'} style={{height:200, width:200}} />
        <Image source={'https://bootdey.com/img/Content/avatar/avatar5.png'} style={{height:200, width:200}} />
        </View>
        <Button title="Launch Camera Roll" onPress={()=>this._launchCameraRollAsync()}/>

        {this.state.chosenImage && (<Image 
        source={{uri:this.state.chosenImage.uri}} 
        style={{
          height:200,
          width:200
         }}/>)}
      <Button title="Camera" onPress={()=> this._launcCameraAsync()}/>
      {this.state.takenImage && (<Image 
        source={{uri:this.state.takenImage.uri}} 
        style={{
          height:200,
          width:200
         }}/>)}

      <TouchableHighlight style={styles.buttonContainer} 
          onPress={() => this.props.navigation.navigate("Profile")}>
          <Text>Volver a Perfil</Text>
      </TouchableHighlight>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  buttonContainer: {
    margin: 20,
  }
});