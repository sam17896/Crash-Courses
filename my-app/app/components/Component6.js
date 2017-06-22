import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component6 extends React.Component {
  render() {

    return (
        <View>
            <Text>Hello From Compoenent6</Text>
        </View>
    );
  }
}

AppRegistry.registerComponent("Compoenent6", () => Component6);
