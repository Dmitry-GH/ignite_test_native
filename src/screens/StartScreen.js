import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles  from "../styles/Styles";
import MenuButton from '../components/MenuButton';
import TestButton from '../components/TestButton';

export default class StartScreen extends React.Component  {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
  
      return {
        headerTitle: 'Start',
        headerLeft: (
          <MenuButton BtnPress = {() => navigation.openDrawer()} />
        ),
      };
    };

    render(){
      return (
        <View style={Styles.container}>
            <TestButton 
                BtnText="Kontrollgang starten"
                BtnPress={() => this.props.navigation.navigate('ChooseInspection')} />
        </View>
      );
    };
  }