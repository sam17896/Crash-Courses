import React from 'react';
import { AppRegistry, Text, View , StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends React.Component {
  onPress(){
      console.log('Pressed');
  }
  
  render() {
    return (
    <View>
        <View style={styles.MyView}>
            <Text style = {styles.MyText}>Hello From Component2</Text>
        </View>
        <View style = {styles.container}>
            <TouchableHighlight style = {styles.v1} onPress={this.onPress} underlayColor = "blue">
                <View>
                    <Text></Text>
                </View>
            </TouchableHighlight>
                <View style = {styles.v2}>
                    <Text></Text>
                </View>
            <View style = {styles.v2}>
                <Text></Text>
            </View>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    MyView : {
        backgroundColor : 'blue'
    },
    MyText : {
        color : 'white'
    },
    container : {
        flexDirection : 'row',
        height : 200
    },
    v1 : {
        flex : 1,
        backgroundColor : 'white',
        padding : 10
    },
    v2 : {
        flex : 1,
        backgroundColor : 'green',
        padding : 10
    },
    v3 : {
        flex : 1,
        backgroundColor : 'green',
        padding : 10
    }


});

AppRegistry.registerComponent("Component2", () => Component2);
