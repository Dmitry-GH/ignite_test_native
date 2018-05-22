import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles from "../styles/Styles";
import TestButton  from "../components/TestButton";

export default class ChooseInspectionScreen extends React.Component {
    static navigationOptions = {
      title: 'Kontrolle',
    };

    _getLog = () => {
        console.log(`log from: 2`);
    }

    componentWillMount() {
      this.props.navigation.setParams({ getLog: this._getLog });
    }

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