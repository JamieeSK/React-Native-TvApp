import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

global.config = require('./app.json');

AppRegistry.registerComponent(appName, () => App);