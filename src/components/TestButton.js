import  React  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TestButton = props =>{
    return (
      <View style={styles.buttonWrapp}>
            <TouchableOpacity
                onPress={props.BtnPress} 
                style={[styles.button, props.rewriteStyle]}>
                    <Text style={styles.buttonText}>{props.BtnText}</Text>
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    
    button: {
      alignItems: 'center',
      backgroundColor: '#1ebbcf',
      padding: 10,
      marginVertical: 15,
      marginHorizontal: 10,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonWrapp:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        maxHeight: 250,
        minHeight: 150
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  })

export default TestButton;