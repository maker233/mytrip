import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});
 
const slides = [
  {
    key: 'somethun',
    title: 'Solo necesitas caminar',
    img: 'https://img.icons8.com/cotton/100/000000/around-the-globe.png',
    // image: require('./assets/images/icon.png'),
    text: '¡Eso es! Simplemente necesitas tus pasos diarios para lograr objetivos y unirte a rutas con tus amigos.',
    icon: 'md-compass',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Descubre nuevos lugares',
    text: 'Da la vuelta al mundo, viaja a la Luna o recorre la Ruta de la Seda. Apúntate y colecciona lugares.',
    // image: require('./assets/images/icon.png'),
    icon: 'md-map',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'Crea tus propias rutas',
    // image: require('./assets/images/icon.png'),
    text: 'Crea rutas con tus compañeros del trabajo, tu familia o amigos. Entre todos conseguiréis completar las rutas.',
    icon: 'md-trophy',
    colors: ['#29ABE2', '#4F00BC'],
  },
];
 
export default class App extends React.Component {
  _renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
      
    >
      {/* <Image source={props.image} /> */}
      <Ionicons style={{ backgroundColor: 'transparent' }} name={props.icon} size={200} color="white" />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );
 
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        onDone = {()=> this.props.navigation.navigate("Auth")}
      />
    );
  }
}