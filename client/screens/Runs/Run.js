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

export default class Run extends Component {

  constructor(props) {
    super(props);
    this.state = {
      run:[],
      modalVisible:false,
      userSelected:[],
      product: {
        name:"RUTA AL EVEREST",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        created:"",
        images:[
          "https://fastly.4sqi.net/img/general/200x200/2523124_vsTbMNWQizY_gUVk9WqZMjFqUmdYq8ays-0L_rROtJw.jpg", 
          "https://bootdey.com/img/Content/avatar/avatar2.png", 
          "https://bootdey.com/img/Content/avatar/avatar3.png", 
        ]
      }
    };
    this.service = new RunService();
  }

  componentDidMount() {
    console.log("COMPONENTE RUN MONTADO", this.props._id)
    this.service.getOneRun(this.props.id)
        .then(response => this.setState({ run: response }))
}

  __setImageSelected = (image) => {
    this.setState({selectedImage:image});
  }

  __renderImages = () => {
    return(
      <View style={styles.smallImagesContainer}>
        {this.state.product.images.map((prop, key) => {
          return (
            <TouchableOpacity key={key} onPress={() => {this.__setImageSelected(prop)}}>
              <Image style={styles.smallImage} source={{uri:prop}}/>
            </TouchableOpacity>
          );
        })}
      </View>
    )
  }


  render() {
    var mainImage = (this.state.selectedImage) ? this.state.selectedImage: this.state.product.images[0]; 
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{this.state.product.name}</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.mainImageContainer}>
                  <Image style={styles.mainImage} source={{uri:mainImage}}/>
                </View>
                {this.__renderImages()}
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Description</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.description}>{this.state.product.description}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardContent}>
              <TouchableOpacity style={styles.shareButton} onPress={()=> this.props.navigation.navigate("RunsStack")}>
                <Text style={styles.shareButtonText}>VER RANKING</Text>  
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7",
  },
  content:{
    marginLeft:10,
    marginRight:10,
    marginTop:20,
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