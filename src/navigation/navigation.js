import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';
import StartScreen from "../screens/StartScreen";
import ChooseInspectionScreen  from "../screens/ChooseInspectionScreen";
import ScanScreen  from "../screens/ScanScreen";
import SearchScreen  from "../screens/SearchScreen";

const StackNav = createStackNavigator({
    Start: {
        screen: StartScreen,
    },
    ChooseInspection: {
        screen: ChooseInspectionScreen,
    },
    ScanScreen:{
        screen: ScanScreen
    },
    SearchScreen:{
        screen: SearchScreen
    }
}, {
    initialRouteName: 'Start',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#1ebbcf',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
});


const RootStack = createDrawerNavigator({
    StackNav:{
        screen: StackNav
    }
},{
    drawerBackgroundColor: '#30363a'
});

export default RootStack;