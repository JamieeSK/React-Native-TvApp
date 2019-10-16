import React, { Fragment } from 'react';
import axios from 'axios';
import {
    View,
    ScrollView,
    Text,
    Platform,
} from "react-native";

import Card from "./Card/Card";

import styles from "./row.scss";

export default class Row extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            cache: [],
        };

        this.onScroll = this.onScroll.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    onScroll = () => {
        console.log('#onScroll');

        // const instructions = Platform.select({
        //     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
        //     android:
        //         'Double tap R on your keyboard to reload,\n' +
        //         'Shake or press menu button for dev menu',
        // });
    }

    fetchData = () => {
        axios.get(`https://vanture.io/api/api.json`).then(res => {
            const cache = res.data;
            this.setState({
                cache: cache,
                isLoading: false
            });
        }).catch(error => {
            if (error.response) {
                console.log(error.responderEnd);
            }
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const { isLoading, cache } = this.state;

        const Content = () => {
            return isLoading ? <Text style={styles.errorText}>{'{'}LOADING...{'}'}</Text> : cache.map(child => <Card
                key={child.id} id={child.id} name={child.name} genre={child.genre} />)
        }

        return (
            <>
                <View style={styles.rowContainer}>

                    <Text style={styles.categoryTitle}>{'{'}CATEGORY{'}'}</Text>
                    <ScrollView
                        onScroll={this.onScroll()}
                        keyboardShouldPersistTaps='always'
                        keyboardDismissMode='on-drag'
                        snapToAlignment='start'
                        contentInsetAdjustmentBehavior="automatic"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                        < Content />
                    </ScrollView>
                </View>
            </>
        );
    }
}
