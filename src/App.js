import React, { Fragment } from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

// Import the App Style.
import styles from "./app.scss";

// Import the Header Component.
import Header from "./components/Header/Header";
// Import the Header Row.
import Row from "./components/Row/Row";
// Import the Header Footer.
import Footer from './components/Footer/Footer';
// Import the Header Banner (live). 
import Banner from './components/Banner/Banner';
// Import the Menu
import Menu from './components/Menu/Menu';

export default class Home extends React.Component {
    render() {

        return (
            <>
                <Fragment>
                    <ScrollView style={styles.container}>
                        <View>
                            {/* The Menu of the app */}
                            <Menu />
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
