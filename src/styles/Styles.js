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
    scrollContainer:{
      flex: 1
    },
    SearchWrapp:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      maxHeight: 140
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
    },
    Kommentar:{
      padding: 10,
      marginVertical: 15,
      marginHorizontal: 10,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      borderColor: 'black', 
      borderWidth: 1,
      maxHeight: 80,
      textAlign: 'left'
    },
    thankText:{
      color: 'black',
      fontWeight: '100',
      marginVertical: 35,
      marginHorizontal: 30,
      fontSize: 40,
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
});