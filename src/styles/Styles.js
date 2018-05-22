import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    SearchWrapp:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      maxHeight: 140
    },
    SearchScrollWrapp: {
      // flex: 1,
      // flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'stretch',
    },
    SearchInput:{
      padding: 10,
      marginVertical: 15,
      marginHorizontal: 10,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      borderColor: 'black', 
      borderWidth: 1,
      maxHeight: 80,
      textAlign: 'center'
    }
});