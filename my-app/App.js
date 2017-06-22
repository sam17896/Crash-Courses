import React from 'react';
import { AppRegistry, Text, View,StyleSheet, ScrollView } from 'react-native';
import Component1 from './app/components/Component1';
import Component2 from './app/components/Component2';
import Component3 from './app/components/Component3';
import Component4 from './app/components/Component4';
import Component5 from './app/components/Component5';

export default class App extends React.Component {

  
  render() {
    return (
    <ScrollView style={{marginTop: 30 }}>
      <Component1 message="Hello World"/>
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </ScrollView>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
