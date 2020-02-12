import React, { Fragment } from 'react';
import {
    View,
    Image,
} from 'react-native';

import styles from "./header.scss";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onExit = this.onExit.bind(this);
    }

    onPress = () => {
        console.log('#onPress');
    }

    onSelect = () => {
        console.log('#onSelect');
        this.setState({ isSelected: true });
    }

    onExit = () => {
        console.log('#onExit');
        this.setState({ isSelected: false });
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <View style={styles.headerContainer}>
                    <View style={styles.cardContainer}>
                        <Image style={styles.headerLogo} source={require('../img/SPORTNOORD_logo_RGB_diap.png')}></Image>
                    </View>
                </View>
            </>
        );
    }
}
