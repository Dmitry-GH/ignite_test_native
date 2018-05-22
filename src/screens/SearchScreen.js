import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles from "../styles/Styles";
import SearchCard  from "../components/SearchCard";

export default class SearchScreen extends React.Component {
    static navigationOptions = {
      title: 'Suche',
    };

    constructor(props) {
      super(props);
      this.state = { text: '' };
    }

    render(){
      return (
        <View style={Styles.container}>
            <View 
              style={Styles.SearchWrapp}>
              <TextInput
                style={Styles.SearchInput}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                underlineColorAndroid='transparent'
                placeholder={'Nummer oder Name'}
              />
            </View>
            <ScrollView
              contentContainerStyle={Styles.SearchScrollWrapp}>
              <SearchCard 
                cardHeader={'BA-18-00001'}
                cardUserName={'Max Mustermann'}
                cardInfo={'Tageskarte - Gr.Muhl'}
                cardDate={'25.08.2018 - 26.08.2018'}
                />
              <SearchCard 
                cardHeader={'BA-18-00001'}
                cardUserName={'Max Mustermann'}
                cardInfo={'Tageskarte - Gr.Muhl'}
                cardDate={'25.08.2018 - 26.08.2018'}
                />
              <SearchCard 
                cardHeader={'BA-18-00001'}
                cardUserName={'Max Mustermann'}
                cardInfo={'Tageskarte - Gr.Muhl'}
                cardDate={'25.08.2018 - 26.08.2018'}
                />
              <SearchCard 
                cardHeader={'BA-18-00001'}
                cardUserName={'Max Mustermann'}
                cardInfo={'Tageskarte - Gr.Muhl'}
                cardDate={'25.08.2018 - 26.08.2018'}
                />
              <SearchCard 
                cardHeader={'BA-18-00001'}
                cardUserName={'Max Mustermann'}
                cardInfo={'Tageskarte - Gr.Muhl'}
                cardDate={'25.08.2018 - 26.08.2018'}
                />
            </ScrollView>
            
        </View>
      );
    }
}