import React, { Fragment } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import styles from "./footer.scss";

export default class Footer extends React.Component {
    render() {
        return (
            <>
                <Fragment>
                    <TouchableHighlight>
                        <View style={styles.footer}>
                            <Text style={styles.footerTitle}> made with <Text style={styles.highlight}>&#9829;</Text> by vanture.</Text>
                        </View>
                    </TouchableHighlight>
                </Fragment>
            </>
        );
    }
}
