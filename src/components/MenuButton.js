import  React  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MenuButton = props =>{
    return(
        <TouchableOpacity 
            onPress={props.BtnPress} 
            style={styles.button}>
            <Image
                style={styles.img}
                source={require('../img/menuIcon.png')}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#1ebbcf',
      padding: 10
    },
    img:{
        width: 32,
        height: 32
    }
  })

export default MenuButton;