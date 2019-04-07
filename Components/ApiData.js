import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableWithoutFeedback, Alert, TouchableOpacity} from 'react-native';
import styles from '../Styles/pokemonscreen.js';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import flatListData from './RegionData';
import region from './Regions';

const PokemonsList = (props) => {
    return(
        <TouchableOpacity style={styles.item} onPress={props.touch}>
            <Text style={styles.itemText}>{props.name}</Text>
            <Image style={styles.img} source={{uri: 'http://pokestadium.com/sprites/xy/'+props.name+'.gif'}}></Image>
        </TouchableOpacity>
    );
};

export default PokemonsList;
