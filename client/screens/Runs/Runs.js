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
import { Button } from 'react-native-elements';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Ruta al Everest", image:"https://img.icons8.com/cotton/64/000000/mountain.png",           count:124.711},
        {id:2,  name: "Viaje a la Luna", image:"https://img.icons8.com/nolan/64/000000/full-moon.png",       count:234.722},
        {id:3,  name: "IronRun",         image:"https://img.icons8.com/dusk/64/000000/hexagon.png",        count:124.678} ,
        {id:4,  name: "Vuelta al Mundo", image:"https://img.icons8.com/dusk/64/000000/globe-earth.png", count:324.723} ,
        {id:5,  name: "Ruta de la Seda", image:"https://img.icons8.com/doodle/48/000000/historic-ship.png",    count:154.573} ,
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. '+item.name);
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>   {item.name}</Text>
                <Text style={styles.count}>Pasos: {item.count}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>APUNTARME</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
        <Button
          title="CREAR NUEVA RUTA"
          onPress={()=> this.props.navigation.navigate("CreateRun")}
          
        />
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
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
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
});  