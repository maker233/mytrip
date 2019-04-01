// import * as React from "react";
// import { Card, Slider } from "react-native-elements";
// import {
//   Text,
//   ScrollView,
//   TextInput,
//   SafeAreaView,
//   View,
//   FlatList
// } from "react-native";
// import { SearchListings } from "@abb/controller";

// interface State {
//   name: string;
//   guests: number;
//   beds: number;
// }

// export class FindListingsConnector extends React.PureComponent<{}, State> {
//   state = {
//     name: "",
//     guests: 1,
//     beds: 1
//   };

//   render() {
//     const { name, guests, beds } = this.state;
//     return (
//       <React.Fragment>
//         <SafeAreaView />
//         <TextInput
//           style={{ fontSize: 20, width: "100%" }}
//           placeholder="search..."
//           onChangeText={text => this.setState({ name: text })}
//           value={name}
//         />
//         <View style={{ alignItems: "stretch", justifyContent: "center" }}>
//           <Slider
//             value={guests}
//             onValueChange={value => this.setState({ guests: value })}
//             step={1}
//             maximumValue={5}
//           />
//           <Text>Guests: {guests}</Text>
//         </View>
//         <View style={{ alignItems: "stretch", justifyContent: "center" }}>
//           <Slider
//             value={beds}
//             onValueChange={value => this.setState({ beds: value })}
//             step={1}
//             maximumValue={5}
//           />
//           <Text>Beds: {beds}</Text>
//         </View>
//         <SearchListings
//           variables={{ input: { name, guests, beds }, limit: 5, offset: 0 }}
//         >
//           {({ listings }) => (
//             <FlatList
//               ListFooterComponent={() => (
//                 <View>
//                   <Text>Footer</Text>
//                 </View>
//               )}
//               data={listings}
//               keyExtractor={({ id }) => `${id}-flc`}
//               renderItem={({ item: l }) => (
//                 <Card
//                   title={l.name}
//                   image={l.pictureUrl ? { uri: l.pictureUrl } : undefined}
//                 >
//                   <Text style={{ marginBottom: 10 }}>
//                     owner: {l.owner.email}
//                   </Text>
//                 </Card>
//               )}
//             />
//           )}
//         </SearchListings>
//       </React.Fragment>
//     );
//   }
// }


//MAPS -----------------------

// import React from 'react';
// import { MapView } from 'expo';

// export default class App extends React.Component {
//   render() {
//     return (
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     );
//   }
// }

// CAMERA ----------------------

// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { Camera, Permissions } from 'expo';

// export default class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
//   };

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }

//   render() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type: this.state.type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Text
//                   style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
//                   {' '}Flip{' '}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
//     }
//   }
// }