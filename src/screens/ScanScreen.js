import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import MenuButton from '../components/MenuButton';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

class ScanScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Scan QR code',
      headerLeft: (
        <MenuButton BtnPress = {() => navigation.openDrawer()} />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {qr: ''};
  }

  read(e) {    
    this.setState({
      qr: e.data
    });
  }

  render() {
    return (
      <ScrollView>
        <QRCodeScanner
          reactivate= {true}
          showMarker= {true}
          onRead={ this.read.bind(this)}
          bottomContent={
            <Text>{this.state.qr}</Text>
          }
        />
      </ScrollView>
    );
  }
}

export default ScanScreen;