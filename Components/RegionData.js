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
        "url": "https://pokeapi.co/api/v2/pokemon?offset=152&limit=275"
    },
    {
        "name": "Hoenn",
        "uriImage": require('../android/app/src/main/res/drawable/pokehoenn.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=276&limit=380"
    },
    {
        "name": "Sinnoh",
        "uriImage": require('../android/app/src/main/res/drawable/pokesinnoh.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=381&limit=491"
    },
    {
        "name": "Teselia",
        "uriImage": require('../android/app/src/main/res/drawable/poketeselia.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=492&limit=530"
    },
    {
        "name": "Kalos",
        "uriImage": require('../android/app/src/main/res/drawable/pokekalos.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=531&limit=671"
    },
    {
        "name": "Alola",
        "uriImage": require('../android/app/src/main/res/drawable/pokealola.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=672&limit=700"
    },
];
export default flatListData;