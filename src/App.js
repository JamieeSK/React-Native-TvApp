import React, { Fragment } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
} from 'react-native';

// Import the App Style.
import styles from "./app.scss";

// Import the Header Component.
import Header from "./components/Header/Header";
// Import the Header Row.
import Row from "./components/Row/Row";
// Import the Header Footer.
import Footer from './components/Footer/Footer';

export default class Home extends React.Component {
    render() {

        return (
            <>
                <Fragment>
                    <ScrollView style={styles.container}>
                        <View>
                            {/* The Header of the App that includes the Logo, Card you select. */}
                            < Header />
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
