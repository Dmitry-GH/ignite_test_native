import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles from "../styles/Styles";
import MenuButton from '../components/MenuButton';
import SearchCard  from "../components/SearchCard";

export default class EndInspectionScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return {
        headerTitle: 'Gewasser',
        headerLeft: (
          <MenuButton BtnPress = {() => navigation.openDrawer()} />
        ),
      };
    };

    render(){
      return (
        <View style={Styles.container}>
            <ScrollView>
              <SearchCard 
                cardInfo={'Gr.Muhl - Allgemeine Strecke'}
                BtnPress={() => this.props.navigation.navigate('ThankYouScreen')}
                />
              <SearchCard 
                cardInfo={'Gr.Muhl - Fliegenstrecke'}
                BtnPress={() => this.props.navigation.navigate('ThankYouScreen')}
                />
              <SearchCard 
                cardInfo={'Ziegelteich'}
                BtnPress={() => this.props.navigation.navigate('ThankYouScreen')}
                />
            </ScrollView>
            
        </View>
      );
    }
}