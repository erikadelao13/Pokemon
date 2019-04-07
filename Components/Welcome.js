import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import styles from '../Styles/mainscreen.js';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'secpokemonlogo'}} style={styles.imageLogo} />
        <Button
         title="let's start"
         onPress={() => this.props.navigation.navigate('region')} />
      </View>
    );
  }
}

