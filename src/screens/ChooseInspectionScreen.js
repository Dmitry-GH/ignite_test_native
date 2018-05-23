import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles from "../styles/Styles";
import MenuButton from '../components/MenuButton';
import TestButton  from "../components/TestButton";

export default class ChooseInspectionScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return {
        headerTitle: 'Kontrolle',
        headerLeft: (
          <MenuButton BtnPress = {() => navigation.openDrawer()} />
        ),
      };
    };

    render(){
      return (
        <View style={Styles.container}>
            <TestButton
                BtnText="Scannen"
                BtnPress={() => this.props.navigation.navigate('ScanScreen')} />
            <TestButton 
                BtnText="Manuelle Kontrolle"
                BtnPress={() => this.props.navigation.navigate('SearchScreen')} />
        </View>
      );
    }
}