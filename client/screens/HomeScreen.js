import Expo from "expo";
import React from "react";
import { Pedometer, registerRootComponent } from "expo";

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

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/cell-phone/dusk/50/ffffff'}}/>
          <Text style={styles.info}>Intro</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/user-menu-male/color/50/ffffff'}}/>
          <Text style={styles.info}>Sign In</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/bar-chart/dusk/50/ffffff'}}/>
          <Text style={styles.info}>Charts</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-cart/color/50/ffffff'}}/>
          <Text style={styles.info}>Cart</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/product/nolan/50/ffffff'}}/>
          <Text style={styles.info}>Product</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-basket/color/50/ffffff'}}/>
          <Text style={styles.info}>Order</Text>
        </View>

        </View>



      
        <View style={styles.container2}>
          <Text>
            Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
          </Text>
          <Text>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
          </Text>
          <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
          
        </View>
        </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  container2: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:340,
    
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
  info:{
    fontSize:22,
    color: "#696969",
  }
});

registerRootComponent(PedometerSensor);