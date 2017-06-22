import React from 'react';
import { AppRegistry, Text, View, ListView,StyleSheet} from 'react-native';

const Users = [
    { name : "Ahsan Sohail" },
    { name : "Hisham Ahmed" },
    { name : "Shaheryar Rashid" },
    { name : "Fahad Farooq" },
]


export default class Component4 extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Users),
    };
  }

  renderRow(user, sectionId, rowId, highlightRow){
      return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
      );
  }
  
  render() {
    return (
    <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)} 
        />
    );
  }
}

const  styles = StyleSheet.create({
    row : {
        flexDirection : "row",
        justifyContent : "center",
        padding : 10,
        backgroundColor: "#f4f4f4",
        marginBottom : 3


    },
    rowText : {
        flex : 1

    }
});

AppRegistry.registerComponent("Component4", () => Component4);
