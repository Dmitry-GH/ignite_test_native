import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles from "../styles/Styles";
import TestButton  from "../components/TestButton";

export default class ThankYouScreen extends React.Component {
    static navigationOptions = {
      title: 'Danke',
    };

    render(){
      return (
        <View style={Styles.container}>
          <ScrollView>
            <Text
            style={Styles.thankText}>Vielen Dank fur deine wertvolle Arbeit!</Text>

              <TestButton
                  BtnText="Neuer Kontrollgang"
                  BtnPress={() => this.props.navigation.navigate('Start')  } />
          </ScrollView>
        </View>
      );
    }
}