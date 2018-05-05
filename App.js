/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements'



export default class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
  data : [{
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }]
  }
}
  keyExtractor = (item, index) => index

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      roundAvatar
      avatar={{ source: { uri: item.avatar_url } }}
    />
  )


  render() {
     return (
    <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.data}
      renderItem={this.renderItem}
    />
  )
}
}


AppRegistry.registerComponent('AwesomeProject', () => App);