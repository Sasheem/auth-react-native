import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class app extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDRPIJ46bcsWmrW5uMimTKLixx2pNVnR_o',
        authDomain: 'auth-react-native-21dac.firebaseapp.com',
        databaseURL: 'https://auth-react-native-21dac.firebaseio.com',
        projectId: 'auth-react-native-21dac',
        storageBucket: 'auth-react-native-21dac.appspot.com',
        messagingSenderId: '1046289737056'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default app;
