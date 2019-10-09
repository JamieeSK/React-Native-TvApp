import React, { Fragment } from 'react';
import {
    Platform,
    ScrollView,
    View,
    Text,
    Dimensions,
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

import Video from 'react-native-video';

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


                            {/* <Text style={{ textAlign: 'center', paddingTop: 50, fontSize: 32, color: 'red' }}> PLAY MAH FUCKING VID DAWG</Text>
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        shouldPlay
                        resizeMode="cover"
                        style={{ width: 500, height: 300 }}
                    /> */}

                        </View>
                    </ScrollView>
                </Fragment>
            </>
        );
    }
}
