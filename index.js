import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
AppRegistry.registerComponent('ignite_test_native', () => App);

// It's only for ignor anoying warning from react-navigation old metod.
// Must be fixed in future
// For more info visit: https://github.com/react-navigation/react-navigation/issues/3956 
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);