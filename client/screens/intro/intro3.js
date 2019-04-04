import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
  ProgressBarAndroid
} from 'react-native';

export default class IntroThree extends Component {
  render() {
    return (
      <View>
        <Image style={styles.welcomeImage} source={{uri: 'https://cdn.dribbble.com/users/449035/screenshots/5612222/mr_worldwide.gif'}}/>
        <Text> PANTALLA 3 </Text>
        <TouchableOpacity style={styles.shareButton} onPress={()=> this.props.navigation.navigate("Intro2")}>
          <Text style={styles.shareButtonText}>BACK</Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton} onPress={()=> this.props.navigation.navigate("Main")}>
          <Text style={styles.shareButtonText}>LET'S GO!</Text>  
        </TouchableOpacity>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ebf0f7",
  },
  content:{
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },
  header:{
    flexDirection:'row',
  },
  mainImage:{
    width:200,
    height:200,
  },
  smallImagesContainer:{
    flexDirection:'column',
    marginLeft:30
  },
  smallImage:{
    width:60,
    height:60,
    marginTop:5, 
  },
  btnColor: {
    height:40,
    width:40,
    borderRadius:40,
    marginHorizontal:3
  },
  contentColors:{
    flexDirection:'row', 
  },
  name:{
    fontSize:22,
    color:"#696969",
    fontWeight:'bold',
  },
  progressbar:{
    fontSize:50,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    fontSize:18,
    color:"#696969",
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },

  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle:{
    color:"#00BFFF"
  }
});  