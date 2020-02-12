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
import RowLive from "../../Row/RowLive";

// Import the Header Footer.
import Footer from "../../Footer/Footer";

// Import the Header Banner (live). 
import Banner from "../../Banner/Banner";

// Import the (Side)Menu
import Menu from "../../Menu/Menu";


export default class Live extends React.Component {

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

                            {/* Build the Row holding the Cards. */}
                            <RowLive/>
                            
                            {/* The Footer of the Application */}
                            < Footer />
                        </View>
                    </ScrollView>
                </Fragment>
            </>
        );
    }
}
