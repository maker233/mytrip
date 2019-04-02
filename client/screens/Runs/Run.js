import React, {Component} from 'react';
import {ProgressBarAndroid, AppRegistry, StyleSheet, View} from 'react-native';

import RunService from '../../services/runService';

export default class RunView extends Component {
  constructor(props) {

    super(props)

    this.state = { run: {} }

    this.service = new RunService();
}

componentDidMount() {

    this.service.getOneRun(this.props.match.params.id)
        .then(response => this.setState({ coaster: response }))
}

  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
});

AppRegistry.registerComponent('RunView', () => App);