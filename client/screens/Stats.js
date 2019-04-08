import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default class Stats extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <Text> Hoy has recorrido 3,2 kilometros</Text>
        <Text> Tardarías en llegar a la Luna 6543 años </Text>
        <Text> Has consumido 32 Calorías </Text>
        <Text> Recargarías tu movil un 2% </Text>
        <Text> Si fueras en coche hubieras contaminado 2 gr/m3 de CO2 </Text>
        <Text> Al ritmo actual tardaría 56 dias en hacer el camino de Santiago </Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#475c7a",
    color: "white"
  }
});  
