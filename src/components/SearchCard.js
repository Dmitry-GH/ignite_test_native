import  React  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SearchCard = props =>{
    return (
      <View>
            <TouchableOpacity
                style={styles.card}>
                    <Text style={styles.buttonTextHeader}>{props.cardHeader}</Text>
                    <Text style={styles.buttonText}>{props.cardUserName}</Text>
                    <Text style={styles.buttonText}>{props.cardInfo}</Text>
                    <Text style={styles.buttonText}>{props.cardDate}</Text>
            </TouchableOpacity>
      </View>
    );  
}

const styles = StyleSheet.create({
    
    card: {
      backgroundColor: '#c8c8c8',
      paddingVertical: 15,
      paddingHorizontal: 25,
      marginBottom: 15,
      marginHorizontal: 10,
      borderRadius: 5,
    //   flex: 1,
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    },
    buttonTextHeader:{
        color: '#30363a',
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonText:{
        color: '#30363a',
        fontSize: 25,
    }
  })

export default SearchCard;