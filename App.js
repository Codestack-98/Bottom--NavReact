import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';

// You can import from local files
import Fb from './screens/Fb';
import In from './screens/In';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
     
      <Appcontainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : Fb},
  Instagram : {screen : In}
})
const Appcontainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
   container : { 
     flex : 1,
     backgroundColor : "darkgray",
     alignItems : "center",
     justifyContent : "center",
   }
})


