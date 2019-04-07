import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import PokeWelcome from './Components/Welcome';
import MainScreen from './Components/MainScreen';
import PokeList from './Components/Pokemon';
import Region from './Components/Regions';
import Teams from './Components/Teams';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
    Welcome:{
        screen: PokeWelcome,
    },
    pokelist:{
        screen: PokeList,
    },
    region:{
        screen: Region,
    },
    teams:{
        screen: Teams,
    }
})
type Props = {};

export default createAppContainer(AppNavigator);

