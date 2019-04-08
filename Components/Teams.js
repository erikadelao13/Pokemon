import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, Alert} from 'react-native';
import styles from '../Styles/pokemonscreen.js';
import {StackNavigator, createStackNavigator, createAppContainer, withNavigation} from 'react-navigation';
import flatListData from './RegionData';
import region from './Regions';
import PokeItems from './ApiData';
import pokemons from './Pokemon';

const numColumns = 3;

export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
        selected: this.props.navigation.state.params.selected
        }

    }
  renderItem = ({item,index}) => {
        return(
            <PokeItems name={this.state.selected}></PokeItems>
            );
  };
  render() {
    return (
        <View style={styles.container}>
            <FlatList //es como un for each
            data={this.state.selected} //colocamos la lista
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            />
        </View>
    );
  }
}