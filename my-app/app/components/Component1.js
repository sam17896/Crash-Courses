import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'Ahsan',
      showName : false,
      message : this.props.message
    }
  }
  render() {

    let name = this.state.showName ? this.state.name : "No Name";
    return (
        <View>
            <Text>{this.state.message}</Text>
            <Text>{name}</Text>
        </View>
    );
  }
}

AppRegistry.registerComponent("Compoenent1", () => Component1);
