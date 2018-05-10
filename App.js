import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { ListItem } from 'react-native-elements'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  keyExtractor= (item, index) => index

  renderItem = ({ item }) => (
    <ListItem 
     title = {item.title}
     subtitle = {item.year}
     hideChevron = {true}
     />
  )

  render(){
   return (
    this.state.isLoading ? 
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     : <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor = {this.keyExtractor}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);

