import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';
import styles from '../Styles/regionscreen';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import flatListData from './RegionData';
type Props = {};

export default class App extends Component<Props> {
renderSeparatorView = () => {
    return (
      <View style={{
          marginLeft: 40,
          marginRight: 40,
          height: 1,
          backgroundColor: "#CEDCCE",
        }}
      />
    );
  };
renderItem = ({item,index}) => {
    return(
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('pokelist', {url: item.url, name: item.name})}>
            <View style={styles.viewStyle}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Image source={item.uriImage} style={styles.img}></Image>
            </View>
        </TouchableOpacity>
    );
};
  render() {
    return (
        <FlatList
         data={flatListData}
         style={styles.container}
         renderItem={this.renderItem}
         keyExtractor={(item, index) => index.toString()}
         ItemSeparatorComponent={this.renderSeparatorView}/>
    );
  }
}