import Homepage from "../src/components/Screens/Homepage/Homepage";
import NewScreen from "../src/components/Screens/NewScreen/NewScreen";
import VideoPlayer from "../src/components/Screens/VideoPlayer/VideoPlayer";

import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
  } from 'react-navigation';
import { enableScreens } from 'react-native-screens';


enableScreens();

const MainScreenNav = createStackNavigator({
    Homepage: { screen: Homepage },
    NewScreen: { screen: NewScreen },
    VideoPlayer: { screen: VideoPlayer },
});
  
const ExampleApp = createSwitchNavigator({
    Home: { screen: MainScreenNav },
},
{
    initialRouteName: 'Home',
});

export default createAppContainer(ExampleApp);