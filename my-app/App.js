import React from 'react';
import { AppRegistry, Text, View,StyleSheet } from 'react-native';
import Component1 from './app/components/Component1';
import Component2 from './app/components/Component2';
import Component3 from './app/components/Component3';
import Component4 from './app/components/Component4';

export default class App extends React.Component {

  
  render() {
    return (
    <View style={{marginTop: 30 }}>
      <Component1 message="Hello World"/>
      <Component2 />
      <Component3 />
      <Component4 />
    </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
