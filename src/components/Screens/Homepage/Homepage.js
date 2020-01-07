import React, { Fragment } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';

// Import the App Style.
// import styles from "./app.scss";
import styles from "../../../app.scss";

// Import the Header Component.
// import Header from "./components/Header/Header";
import Header from "../../Header/Header";
// Import the Header Row.
// import Row from "./components/Row/Row";
import Row from "../../Row/Row";
// Import the Header Footer.
// import Footer from './components/Footer/Footer';
import Footer from "../../Footer/Footer";
// Import the Header Banner (live). 
// import Banner from './components/Banner/Banner';
import Banner from "../../Banner/Banner";
// Import the Menu
// import Menu from './components/Menu/Menu';
import Menu from "../../Menu/Menu";


export default class Homepage extends React.Component {

    //? image centreren
    static navigationOptions = {
        title: "Home", 
        headerTitle: (
            <Image 
                source={require('../../img/SPORTNOORD_logo_RGB_diap.png')}
                style={{width: 330, height: 50}} 
            ></Image>
        
        ),

        headerStyle: {
            backgroundColor: "black",
            // backgroundColor: "transparent",/
        },
        // color: "white",
        // headerTintColor: "white",
        // headerTitle: "Home",
        // headerLayoutPreset: "center"
        // alignSelf: "center",
        header: null

       
    }

    render() {

        return (
            <>
                <Fragment>
                    {/* The Menu of the app */}
                    <Menu />

                    <ScrollView style={styles.container}>
                        <View>        
                            {/* The Header of the App that includes the Logo, Card you select. */}
                            < Header />
                            {/* Build the Banner of the liveshow */}
                            < Banner />
                            {/* Build the Row holding the Cards. */}
                            < Row />
                            < Row />
                            {/* The Footer of the Application, holding the socials, and other necessaries */}
                            < Footer />
                        </View>
                    </ScrollView>
                </Fragment>
            </>
        );
    }
}
