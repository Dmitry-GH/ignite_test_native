import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles from "../styles/Styles";
import SearchCard  from "../components/SearchCard";

export default class EndInspectionScreen extends React.Component {
    static navigationOptions = {
      title: 'Gewasser',
    };

    constructor(props) {
      super(props);
      this.state = { text: '' };
    }

    render(){
      return (
        <View style={Styles.container}>
            <ScrollView>
              <SearchCard 
                cardInfo={'Gr.Muhl - Allgemeine Strecke'}
                BtnPress={() => this.props.navigation.navigate('InspectionScreen')}
                />
              <SearchCard 
                cardInfo={'Gr.Muhl - Fliegenstrecke'}
                BtnPress={() => this.props.navigation.navigate('InspectionScreen')}
                />
              <SearchCard 
                cardInfo={'Ziegelteich'}
                BtnPress={() => this.props.navigation.navigate('InspectionScreen')}
                />
            </ScrollView>
            
        </View>
      );
    }
}