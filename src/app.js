import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

class app extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <Text>Hello World from app</Text>
      </View>
    );
  }
}

export default app;
