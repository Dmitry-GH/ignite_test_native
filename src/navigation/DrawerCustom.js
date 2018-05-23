import React, {Component} from 'react';
import {ScrollView, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class SideMenu extends Component {

  render () {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Image
                // style={styles.img}
                source={require('../img/user.png')}
            />
            <Text style={styles.text}>
                Max Musterkontroller
            </Text>
            <TouchableOpacity
                style={styles.btn}>
                    <Text style={styles.btnText}>Ausloggen</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                Kontrolle eintragen
            </Text>
            <Text style={styles.text}>
                Meine Kontroller
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        marginVertical: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    btnText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    btn:{
        backgroundColor: '#1ebbcf',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 40,
        borderRadius: 5,
    }
})