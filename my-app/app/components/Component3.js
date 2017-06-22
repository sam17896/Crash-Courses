import React from 'react';
import { AppRegistry, Text, View,StyleSheet, TextInput } from 'react-native';

export default class Component3 extends React.Component {

    constructor(){
        super();
        this.state = {
            value : "Hello World"
        }
    }

    onChangeText(value){
        this.setState({
            value : value
        });
    }
  
  render() {
    return (
    <View>
        <TextInput
         placeholder="Enter Text..."
         value = {this.state.value}
         onChangeText={(value)=>this.onChangeText(value)} />
         <Text>{this.state.value}</Text>
    </View>
    );
  }
}

AppRegistry.registerComponent("Component3", () => Component3);
