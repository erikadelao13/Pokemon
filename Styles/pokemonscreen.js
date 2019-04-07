import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
   },
   item: {
        alignItems: 'center',
        backgroundColor: '#CEDCCE',
        flex: 1,
        margin: 2
   },
  itemText: {
        textTransform: 'uppercase',
        fontFamily: 'sans-serif-light',
        fontSize: 15,
        color: '#000000'
    },
   img: {
        resizeMode:'contain',
        width: 100,
        height: 130
   },
   floatingButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 15,
        right: 15,
        elevation: 8
   },
   selected: {
   backgroundColor: "#FA7B5F"
   },
  addIcon: {
    fontSize: 30,
    color: 'white'
  }
 });
 export default styles;