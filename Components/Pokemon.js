import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableWithoutFeedback, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import styles from '../Styles/pokemonscreen.js';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import flatListData from './RegionData';
import region from './Regions';
import PokeItems from './ApiData';
import Modal from 'react-native-modal';

const formatData = (pokemon, numColumns) =>{
    const numberOfFullRows = Math.floor(pokemon.length/numColumns);
    let numberOfElementsLastRow = pokemon.length - (numberOfFullRows* numColumns);
    while(numberOfElementsLastRow != numColumns && numberOfElementsLastRow != 0){
        pokemon.push({key: 'blank-${numberOfElementsLastRow}', empty: true});
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return pokemon;
};
let item;
const numColumns = 3;
export default class App extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return {
            name: navigation.state.params.name,
        };
    };

    constructor(props){
        super(props);
        this.state={
            loading: false, //vamos a saber cuando la aplicacion quede en proceso de descarga.
            pokemon: [], //lista donde se van a guardar los pokemon
            url: this.props.navigation.state.params.url,
            count: 0,
            selected: []
        }
    }

    componentDidMount(){ //se va ejecutar inmediatamente despues de que los componentes hayan sido montados
        this.getPokemon();
    }
    touchPokemon = (item) => {
        if(([...this.state.selected].length == 0) || ([...this.state.selected].length < 6)){
            var newStateArray = this.state.selected.slice();
            newStateArray.push(item);
            this.setState({
              count: this.state.count + 1,
              selected: newStateArray,
            });
            Alert.alert('Escogiste a '+item);
            return([...this.state.selected]);
        }else if([...this.state.selected].length >= 6){
            Alert.alert('Ya escogiste 6 pokemons, no puedes escoger mas.');
        }
    };

    sendPokemons = () => {
        if((this.touchPokemon(item) != null)||(this.touchPokemon(item) != 0)){
            Alert.alert('orale we ahi te van 6 pokemons');
            return(this.touchPokemon(item));
        }
    }

    getPokemon = () =>{
        this.setState({loading: true});
        fetch(this.state.url) //this.state.url es la peticion que recibo de la api
        .then(res => res.json()) //tratamos de transformarlo a json
        .then(res => { //una vez fue transformado a json
            this.setState({ //seteamos el nuevo estado que queremos
                pokemon: res.results,
                url: this.props.navigation.state.params.url,
                loading: false //se coloca como falso debido a que ya obtuvimos la respusta del servidor
                    }
                )
            }
        );//nos permite hacer la peticion al API
    };

    renderItem = ({item,index}) => {
        if(item.empty == true){
            return <View style={styles.item} style={styles.itemInvisible}></View>
        }
        return(
            <TouchableOpacity style={styles.item} onPress={() => this.touchPokemon(item.name)}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Image style={styles.img} source={{uri: 'http://pokestadium.com/sprites/xy/'+item.name+'.gif'}}></Image>
            </TouchableOpacity>
            );
    };

  render() {
    if(this.state.loading){
        return (
            <View style={styles.container}>
                <Text> Cargando Pokemons!</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList //es como un for each
            data={formatData(this.state.pokemon, numColumns)} //colocamos la lista
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            />
            <TouchableOpacity style={styles.floatingButton} onPress={() => {this.props.navigation.navigate('teams'),{selected: this.sendPokemons()}}}><Text style={styles.addIcon}>Go!</Text></TouchableOpacity>
        </View>
    );
  }
}