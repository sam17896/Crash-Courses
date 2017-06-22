import React from 'react';
import { AppRegistry, Text, View, StyleSheet,ListView } from 'react-native';

export default class Component5 extends React.Component {
     constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds
    };
  }

  fetchUsers(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((res) => {
            this.setState({
                dataSource : this.state.dataSource.cloneWithRows(res)
            });
        });
  }
  
  componentDidMount(){
      this.fetchUsers();
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

AppRegistry.registerComponent("Compoenent5", () => Component5);
