import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TouchableHighlight,
} from "react-native";


import { withNavigation } from 'react-navigation';
import styles from "./card.scss";


// export default class Card extends React.Component {
class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
            id: this.props.id,
            name: this.props.name,
            genre: this.props.genre,
            navigation: this.props.navigation,
        }

        this.onPress = this.onPress.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onExit = this.onExit.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    navigate = () => {
        console.log("navigate");
        
    }

    onPress = () => {
        console.log('#onPress');
        this.props.navigation.navigate("VideoPlayer");
    }

    onSelect = () => {
        console.log('#onSelect');
        this.setState({ isSelected: true });
    }

    onExit = () => {
        console.log('#onExit');
        this.setState({ isSelected: false });
    }

    render() {
        const { isSelected, id, name, genre } = this.state;

        const appName = config.displayName.toUpperCase();
        
        return (
            <>
                <TouchableHighlight 
                    style={styles.card}
                    key={id}
                    onPress={() => this.onPress()}
                    onShowUnderlay={() => this.onSelect()}
                    onHideUnderlay={() => this.onExit()}
                    activeOpacity={0.7}
                    underlayColor={'transparent'}>

                    <View>
                        <View style={[styles.imageContainer], isSelected ? styles.selectedCard : styles.unselectedCard}>
                            <Image source={isSelected ? { uri: 'https://via.placeholder.com/350/FFA400/EBEBEB/?text=' + name } : { uri: 'https://via.placeholder.com/350/C3272B/EBEBEB/?text=' + name }}
                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            />
                        </View>
                        <View>
                            <Text style={styles.cardTitle}>{name}</Text>
                            <Text style={styles.cardGenre}>{appName} <Text style={styles.icon}>&#9679;</Text> {genre}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </>
        );
    }
}
export default withNavigation(Card);