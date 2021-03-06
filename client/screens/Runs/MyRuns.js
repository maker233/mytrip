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

import RunCard from './RunCard'

import RunService from '../../services/runService';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {

      runs: undefined,

      modalVisible: false,
      userSelected: [],
    };
    this.service = new RunService();
  }

  componentDidMount() {
    this.service.getMyRuns()
      .then(response => {
        this.setState({
          runs: response
        })
        // console.log("COMPONENTE MYRUNS MONTADO")
        // console.log(this.state.runs)
      })
  }

  _keyExtractor = (item) => item._id


  render() {
    return (

      <View style={styles.container}>
        <Text>MIS RUTAS</Text>
        {
          // this.state.runs !== undefined &&
          // this.state.runs.map(run => (
          //   <Text>{run.name}</Text>
          // ))
          this.state.runs !== undefined &&
          <FlatList
            style={styles.contentList}
            columnWrapperStyle={styles.listContainer}
            data={this.state.runs}
            keyExtractor={this._keyExtractor}
            // renderItem={({item}) => {
            //   return (
            //   <RunCard />
            //   )}}
            renderItem={({ item }) => <RunCard {...item}></RunCard>}
          />
        }

        <Button
          title="CREAR NUEVA RUTA"
          onPress={() => this.props.navigation.navigate("CreateRun")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ebf0f7"
  },
  contentList: {
    flex: 1,
  }
});
