import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import AuthService from '../services/authService';

export default class HomeMenuView extends Component {

  constructor() {
    super()
    this.state= {}
    this.service = new AuthService()
  }

  componentDidMount() {
    console.log("HomeScreen montado")
    this.service.getUser()
    .then(response => console.log(response))
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            {/* <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            /> */}
            
          </View>

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

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/notification/dusk/50/ffffff'}}/>
          <Text style={styles.info}>Info</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/profile/color/50/ffffff'}}/>
          <Text style={styles.info}>Profile</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/friends/color/50/ffffff'}}/>
          <Text style={styles.info}>Friends</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
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