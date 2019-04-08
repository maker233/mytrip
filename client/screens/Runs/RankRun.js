
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView
} from 'react-native';

import RunService from '../../services/runService';

export default class UsersView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      usersranked: [],
      dataSource: ds.cloneWithRows([
        {image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Popino"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Carlos"},
        {image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Abel"},
        {image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Cristina"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Otro Carlos"},
        {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Dan"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Dani"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Pepe"},
        {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"David"},
        {image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Balta"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Sofi"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Raluca"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Enrique"},
        {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Javi"},
      ]),
    };
    this.service = new RunService();
  }

  componentDidMount() {
    this.service.getUsersRanked(this.props._id)
    .then(response => {
      this.setState({
        usersranked: response
      })
      console.log("COMPONENTE RankRun MONTADO, el id es: ", this.props.id)
      // console.log(this.state.runs)
    })
  }
    

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: user.image}}/>
                      <Text style={styles.username}>{user.username}</Text>
                      <View style={styles.iconContent}>
                        <Image style={styles.icon} source={{uri: "https://png.icons8.com/customer/office/40"}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width: 60,
    height: 60,
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
  },
  box: {
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  iconContent:{
    width: 60,
    height: 60,
    backgroundColor: '#40E0D0',
    marginLeft: 'auto',
    alignItems: 'center'
  },
  icon:{
    width: 40,
    height: 40,
  }
});
 
