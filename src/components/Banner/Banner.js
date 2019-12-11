import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import styles from "./banner.scss";

export default class Banner extends React.Component {
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
                <View style={styles.bannerContainer}>
                    <View style={styles.bannerContainer}>
                        <Image style={styles.bannerPic} source={require('../img/test.jpeg')}></Image>

                        
                        {/* <View style={styles.bannerTest}> */}
                            <Image style={styles.bannerFiets} source={require('../img/screenshot.png')}></Image>
                            {/* <Text style={styles.textTest}>{'{'}Catogorieën{'}'}</Text> */}
                        {/* </View> */}
                    </View>
                </View>
            </>
        );
    }
}
