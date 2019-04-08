import Expo from "expo";
import React from "react";
import { Pedometer, registerRootComponent, TouchableHighlight } from "expo";

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import NativeService from '../services/nativeService';
import RunService from '../services/runService';

export default class PedometerSensor extends React.Component {
  constructor(){
    super()
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      currentStepCount: 0
    };
  this.runservice = new RunService()
  this.service = new NativeService()
  } 

  
  componentDidMount() {
    this._subscribe();

  }

  keepSteps = () => {

    this.service.saveSteps(this.state.pastStepCount)
    setInterval(() => {
      this.service.saveSteps(this.state.pastStepCount)
    },3600000)
    
    this.runservice.updateRunDistances(this.state.pastStepCount);

  }


  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({ 
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps }, ()=> this.keepSteps());
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View>
      <View style={styles.container}>
      <View>
        <Image style={styles.imagehome} source={{uri: 'https://i.imgur.com/Lth2gI7.png'}}/>
        </View>

        <View style={styles.container2}>
          <Text>
            ESTOS SON TUS PASOS DE HOY
          </Text>
          <Text>¡Aumenta tus pasos para completar las Rutas!</Text>
          <Text style={styles.pasos}>
            {this.state.pastStepCount}
          </Text>
          
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/48/000000/alps.png'}}/>
          <Text style={styles.info}>Explora</Text>
          
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/cotton/64/000000/adventures.png'}}/>
          <Text style={styles.info}>Mi Perfil</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/bar-chart/dusk/50/ffffff'}}/>
          <Text style={styles.info}>Datos</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/dusk/64/000000/world-map.png'}}/>
          <Text style={styles.info}>Crear Ruta</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/cotton/64/000000/world-map.png'}}/>
          <Text style={styles.info}>Mis Rutas</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/dusk/64/000000/logout-rounded.png'}}/>
          <Text style={styles.info}>Salir</Text>
        </View>

        </View>

        
        </View>

      
        // {/* <View style={styles.container2}>
        //   <Text>
        //     Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
        //   </Text>
        //   <Text>
        //     Steps taken in the last 24 hours: {this.state.pastStepCount}
        //   </Text>
        //   <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
          
        // </View>
        // </View> */}

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  container2: {
    
    marginTop: 80,
    marginBottom: -10,
    alignItems: "center",
    justifyContent: "center",
    
    
    
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12
  },
  icon: {
    width:60,
    height:60,
  },
  pasos: {
    fontSize:40,
    color: "#0A0A22",
    
  },
  imagehome: {
    marginTop: -50,
    marginBottom: 20,
    width:420,
    height:300,
  },
  info:{
    fontSize:20,
    color: "#696969",
    
  },
  
});

registerRootComponent(PedometerSensor);