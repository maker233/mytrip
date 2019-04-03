import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList, 
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

import RunService from '../../services/runService';


export default class RunCard extends React.Component {
  constructor(props){
    super(props)
    this.props = props
    this.state = {

    }
    this.service = new RunService();
  }

  // goToRun = () => this.props.navigation.navigate('Run', {itemId: this.props._id});

  // gotoRun = (run) => {
  //   Alert.alert('Message', 'Item clicked. '+this.props._id),
  //   () => this.props.navigation.navigate("Main")
  // }

  addMeRun = (run) => {
    // Alert.alert(item.id)
    let percent = (this.props.completedistance / this.props.distance)*100
    console.log(`Click en APUNTARME, este es el id:  `+this.props._id)
    this.service.addMeRun(run)
      .then((response) => {Alert.alert('Message', 'Te has unido a la ruta '+this.props.name+' , estáis al '+percent+'% de la ruta, ¡Ánimo!')}
      )}

  render() {
    // console.log("hola",this.props)
    return (
      
            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Run', {itemId: this.props})}> 
              <Image style={styles.image} source={{uri: this.props.photo}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>   {this.props.name}</Text>
                <Text style={styles.count}>Pasos: {this.props.completedistance}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> {this.addMeRun(this.props._id)}}>
                  <Text style={styles.followButtonText}>APUNTARME</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  cardContent: {
    marginLeft:20,
    marginTop:10,
    marginBottom:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:5,
    height:35,
    width:200,
    padding:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#000000",
    
  },
  followButtonText:{
    color:"#000000",
    fontWeight:'bold',
    fontSize:12,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:220,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#000000",
    color:"#000000",
    fontWeight:'bold'
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  }
});
