import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Styles from "../styles/Styles";
import TestButton  from "../components/TestButton";

export default class InspectionScreen extends React.Component {
    static navigationOptions = {
      title: 'Kontrolle',
    };

    constructor(props) {
      super(props);
      this.state = { 
        btnOkColor: '#1ebbcf', 
        btnNichtOkColor: '#ed2f43',
        requriedBorder: 'black', 
        text: '',
        isClicked: false,
        isTextRequried: false };
    }

    goNext = () =>{
      if (this.state.isClicked) {
        if (this.state.isTextRequried && this.state.text.length < 1) {
          this.setState({requriedBorder: 'red'});
        }else{
          this.props.navigation.navigate('EndInspectionScreens')          
        }
      }
    }

    render(){
      return (
        <View style={Styles.container}>
          <ScrollView>
          <Text>Kontroll-Code: 4521</Text>
          <Text>AngelKarte: BA-18-000001</Text>
          <Text>Angler: Max Mustermann</Text>
            <TestButton
                rewriteStyle={{backgroundColor: this.state.btnOkColor}}
                BtnText="OK"
                BtnPress={() => this.setState({
                  btnOkColor: '#1ebbcf', 
                  btnNichtOkColor: '#ccc',
                  isClicked: true,
                  isTextRequried: false}) } />
            <TestButton
                rewriteStyle={{backgroundColor: this.state.btnNichtOkColor}}
                BtnText="Nicht OK"
                BtnPress={() => this.setState({
                  btnOkColor: '#ccc', 
                  btnNichtOkColor: '#ed2f43',
                  isClicked: true,
                  isTextRequried: true})} />
            <TextInput
                style={[Styles.Kommentar, {borderColor: this.state.requriedBorder}]}
                onChangeText={(text) => this.setState({text, requriedBorder: 'black'})}
                value={this.state.text}
                underlineColorAndroid='transparent'
                placeholder={'Kommentar'}
                multiline={true}
                numberOfLines={4}
              />
              <TestButton
                BtnText="Kontrolle Speichern"
                BtnPress={this.goNext} />
          </ScrollView>
        </View>
      );
    }
}