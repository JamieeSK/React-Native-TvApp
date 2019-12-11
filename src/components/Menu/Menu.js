import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import styles from "./menu.scss";

export default class Menu extends React.Component {
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
                <View style={styles.menuContainer}>
                    <Image style={styles.menuSearch} source={require('../img/path61.png')}></Image>
                </View>
            </>
        );
    }
}
