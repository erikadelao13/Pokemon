import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, Alert} from 'react-native';
import styles from '../Styles/pokemonscreen.js';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import flatListData from './RegionData';
import region from './Regions';
import PokeItems from './ApiData';

const numColumns = 3;

export default class App extends Component<Props> {
  renderItem = ({item,index}) => {
        return(
            <PokeItems name={this.props.navigation.state.selected}></PokeItems>
            );
  };
  render() {
    return (
        <View style={styles.container}>
            <FlatList //es como un for each
            data={this.props.navigation.state.selected} //colocamos la lista
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            />
        </View>
    );
  }
}