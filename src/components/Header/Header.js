import React, { Fragment } from 'react';
import {
    View,
    Text,
    TouchableHighlight
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
                        <Text style={styles.cardTitle}>{'{'}LIVE STREAM{'}'}</Text>
                        <Text style={styles.cardSubTitle}>{'{'}INFORMATION{'}'}</Text>

                        <TouchableHighlight
                            style={[styles.cardButton]}
                            onPress={() => this.onPress()}
                            onShowUnderlay={() => this.onSelect()}
                            onHideUnderlay={() => this.onExit()}
                            underlayColor={'#ebebeb'}
                            activeOpacity={0.7}>
                            <Text style={styles.cardButtonText}>Watch</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </>
        );
    }
}
