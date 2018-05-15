import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class app extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDRPIJ46bcsWmrW5uMimTKLixx2pNVnR_o',
        authDomain: 'auth-react-native-21dac.firebaseapp.com',
        databaseURL: 'https://auth-react-native-21dac.firebaseio.com',
        projectId: 'auth-react-native-21dac',
        storageBucket: 'auth-react-native-21dac.appspot.com',
        messagingSenderId: '1046289737056'
    });

    firebase.auth().onAuthStateChanged((user) => {
      // called when user signs in and signs out
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ paddingTop: 100 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }


}

export default app;
