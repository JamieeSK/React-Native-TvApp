//import Screens
import Homepage from "../src/components/Screens/Homepage/Homepage";
import VideoPlayer from "../src/components/Screens/VideoPlayer/VideoPlayer";
import Searchpage from "../src/components/Screens/Searchpage/Searchpage";

import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
  
//Import react-native-screens to change screens
import { enableScreens } from 'react-native-screens';

//Hides warning
console.disableYellowBox = true;

enableScreens();

const MainScreenNav = createStackNavigator({
    Homepage: { screen: Homepage },
    VideoPlayer: { screen: VideoPlayer },
    Searchpage: { screen: Searchpage },
});
  
const App = createSwitchNavigator({
    Home: { screen: MainScreenNav },
},
{
    initialRouteName: 'Home',
});

export default createAppContainer(App);