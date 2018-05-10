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


export default class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
  isLoading: false,
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
    const spinner = <ActivityIndicator size='large'/>
     return (
    this.state.isLoading ? 
    <View styles = {styles.container}>
      {spinner}
      </View> 
      : <View styles = {styles.container}>
          <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.data}
      renderItem={this.renderItem}
      />
    </View>
  )
}
}


AppRegistry.registerComponent('AwesomeProject', () => App);



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})