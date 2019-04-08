import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';

const flatListData = [
    {
        "name": "Kanto",
        "uriImage": require('../android/app/src/main/res/drawable/pokekantos.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    },
    {
        "name": "Johto",
        "uriImage": require('../android/app/src/main/res/drawable/pokejohto.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=251"
    },
    {
        "name": "Hoenn",
        "uriImage": require('../android/app/src/main/res/drawable/pokehoenn.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=251&limit=386"
    },
    {
        "name": "Sinnoh",
        "uriImage": require('../android/app/src/main/res/drawable/pokesinnoh.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=386&limit=493"
    },
    {
        "name": "Teselia",
        "uriImage": require('../android/app/src/main/res/drawable/poketeselia.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=493&limit=649"
    },
    {
        "name": "Kalos",
        "uriImage": require('../android/app/src/main/res/drawable/pokekalos.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=649&limit=721"
    },
    {
        "name": "Alola",
        "uriImage": require('../android/app/src/main/res/drawable/pokealola.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=721&limit=802"
    },
];
export default flatListData;