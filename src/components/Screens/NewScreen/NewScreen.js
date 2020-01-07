import React, { Fragment } from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

// Import the App Style.
// import styles from "./app.scss";
// import styles from "";

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

export default class NewScreen extends React.Component {
    render() {

        return (
            <>
                <Fragment>
                    <ScrollView>
                        <View>
                            {/* The Menu of the app */}
                            <Menu />
                            {/* The Header of the App that includes the Logo, Card you select. */}
                       
                            {/* Build the Row holding the Cards. */}
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
