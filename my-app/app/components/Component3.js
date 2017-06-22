import React from 'react';
import { AppRegistry, Text, View,StyleSheet, TextInput, Switch } from 'react-native';

export default class Component3 extends React.Component {

    constructor(){
        super();
        this.state = {
            value : "Hello World",
            switchValue : false
        }
    }

    onChangeText(value){
        this.setState({
            value : value
        });
    }

    onSwitchChange(value){
        this.setState({
            switchValue : value
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
         <Switch 
            value = {this.state.switchValue}
            onValueChange = {(value) => this.onSwitchChange(value)}
         />
    </View>
    );
  }
}

AppRegistry.registerComponent("Component3", () => Component3);
