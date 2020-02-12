import React, { Fragment } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';

// Import the App Style.
import styles from "../../../app.scss";

// Import the Header Component.
import Header from "../../Header/Header";

// Import the Rows.
import RowVideo from "../../Row/RowVideo";
import RowShow from "../../Row/RowShow";

// Import the Header Footer.
import Footer from "../../Footer/Footer";

// Import the Header Banner (live). 
import Banner from "../../Banner/Banner";

// Import the (Side)Menu
import Menu from "../../Menu/Menu";


export default class Homepage extends React.Component {

    //Styling screen navigation
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <>
                <Fragment>
                    {/* The (Side)Menu of the app */}
                    <Menu />

                    <ScrollView style={styles.container}>
                        <View>
                            {/* The Header of the App that includes the Logo. */}
                            < Header />
                            {/* Build the Banner of the liveshow */}
                            {/* < Banner /> */}
                            
                            {/* Build the Row holding the Cards. */}
                            < RowVideo />
                            < RowShow />
                            {/* The Footer of the Application */}
                            < Footer />
                        </View>
                    </ScrollView>
                </Fragment>
            </>
        );
    }
}
